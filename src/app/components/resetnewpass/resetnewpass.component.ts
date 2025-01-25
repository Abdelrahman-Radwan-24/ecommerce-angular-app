import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserData } from '../../core/Common/CurrentUser';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-resetnewpass',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, TranslateModule],
  templateUrl: './resetnewpass.component.html',
  styleUrl: './resetnewpass.component.scss',
})
export class ResetnewpassComponent implements OnInit, OnDestroy {
  ngOnInit() {
    this.resetPassword.get('email')?.patchValue(UserData.Email);
  }

  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService);

  resetPassword: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    newPassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });

  password!: Subscription;

  resetPasswordsub(): void {
    if (this.resetPassword.valid) {
      this.password = this._AuthService
        .resetNewPassword(this.resetPassword.value)
        .subscribe({
          next: (res) => {
            if (res.status == 200) {
              this._Router.navigate(['/login']);
            }
            this._ToastrService.success(
              'Your Password is Reset Successfully, please signin again'
            );
          },
        });
    }
  }
  ngOnDestroy(): void {
    this.password?.unsubscribe();
  }

  @ViewChild('inputPassword') inputPassword!: ElementRef;
  @ViewChild('eyeIcon') eyeIcon!: ElementRef;

  showPassword(): void {
    if (this.eyeIcon.nativeElement.classList.contains('fa-eye-slash')) {
      this.eyeIcon.nativeElement.classList.remove('fa-eye-slash');
      this.eyeIcon.nativeElement.classList.add('fa-eye');
      this.inputPassword.nativeElement.setAttribute('type', 'text');
    } else {
      this.eyeIcon.nativeElement.classList.add('fa-eye-slash');
      this.eyeIcon.nativeElement.classList.remove('fa-eye');
      this.inputPassword.nativeElement.setAttribute('type', 'password');
    }
  }
}
