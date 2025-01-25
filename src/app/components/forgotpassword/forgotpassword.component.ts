import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
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
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, TranslateModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss',
})
export class ForgotpasswordComponent implements OnDestroy {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService);

  verifyEmail: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });

  Email!: Subscription;

  forgotPasswordSub(): void {
    UserData.Email = this.verifyEmail.get('email')?.value;
    if (this.verifyEmail.valid) {
      this.Email = this._AuthService
        .forgotPassword(this.verifyEmail.value)
        .subscribe({
          next: (res) => {
            if (res.status == 200) {
              this._Router.navigate(['/resetcodepass']);
            }
            this._ToastrService.success(
              'Reset code was sent to your email Successfully'
            );
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.Email?.unsubscribe();
  }
}
