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
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, TranslateModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss',
})
export class ResetpasswordComponent implements OnDestroy {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService);

  verifyResetCode: FormGroup = this._FormBuilder.group({
    resetCode: [null, [Validators.required, Validators.pattern(/^\w{4,}$/)]],
  });

  code!: Subscription;

  resetCode(): void {
    if (this.verifyResetCode.valid) {
      this.code = this._AuthService
        .VerifyResetCode(this.verifyResetCode.value)
        .subscribe({
          next: (res) => {
            if (res.status == 200) {
              this._Router.navigate(['/newpass']);
            }
            this._ToastrService.success('Your Code is Verified Successfully');
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.code?.unsubscribe();
  }
}
