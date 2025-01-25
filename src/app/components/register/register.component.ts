import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService);

  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
      rePassword: [null],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { validators: this.confirmPassword }
  );

  registerForms!: Subscription;

  registerSubmit(): void {
    if (this.registerForm.valid) {
      this.registerForms = this._AuthService
        .setRegisterForm(this.registerForm.value)
        .subscribe({
          next: (res) => {
            if (res.status == 201) {
              setTimeout(() => {
                this._Router.navigate(['/login']);
              }, 1000);
            }
            this._ToastrService.success(
              'Thanks for create account, please Login to your Account.'
            );
          },
        });
    } else {
      this.registerForm.setErrors({ mismatch: true });
      this.registerForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.registerForms?.unsubscribe();
  }

  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
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
