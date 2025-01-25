import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserData } from '../../core/Common/CurrentUser';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService);

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });

  loggedForms!: Subscription;

  submitForms(): void {
    if (this.loginForm.valid) {
      this.loggedForms = this._AuthService
        .setLoginForm(this.loginForm.value)
        .subscribe({
          next: (res) => {
            if (res.status == 200) {
              UserData.userInfo = res.body.user;
              localStorage.setItem('userInfo', JSON.stringify(res.body.user));
              localStorage.setItem('userToken', res.body.token);
              this._AuthService.setUserData();
              this._Router.navigate(['/home']);
            }
            this._ToastrService.success('welcome to Fresh Cart');
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.loggedForms?.unsubscribe();
  }

  @ViewChild('eyeIcon') eyeIcon!: ElementRef;
  @ViewChild('inputPassword') inputPassword!: ElementRef;

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
