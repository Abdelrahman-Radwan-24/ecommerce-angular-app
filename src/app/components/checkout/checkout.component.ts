import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink, TranslateModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _OrdersService = inject(OrdersService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _Router = inject(Router);
  private readonly _ToastrService = inject(ToastrService);

  checkId: string = '';
  cash!: Subscription;
  online!: Subscription;
  param!: Subscription;

  checkOutForms = this._FormBuilder.group({
    phone: [
      null,
      [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
    ],
    city: [
      null,
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern(/^(?:[A-Za-z]+\s?){4,20}$/),
      ],
    ],
    details: [null, [Validators.required, Validators.minLength(10)]],
    paymentMethod: ['', Validators.required],
  });

  ngOnInit(): void {
    this.param = this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.checkId = params.get('id')!;
      },
    });
  }

  cashPayment(): void {
    if (this.checkOutForms.valid) {
      const paymentMethod = this.checkOutForms.get('paymentMethod')!
        .value as string;
      if (paymentMethod === 'cashPayment') {
        this.cash = this._OrdersService
          .cashOrder(this.checkId, this.checkOutForms.value)
          .subscribe({
            next: (res) => {
              if (res.status == 201) {
                this._ToastrService.success(
                  'Your Order Is Placed Successfully'
                );
                this._Router.navigate(['/allorders']);
              }
            },
          });
      } else if (paymentMethod === 'onlinePayment') {
        this.online = this._OrdersService
          .onlineOrder(this.checkId, this.checkOutForms.value)
          .subscribe({
            next: (res) => {
              if (res.status == 200) {
                this._ToastrService.success(
                  'Your Order Is Placed Successfully'
                );
                window.open(res.body.session.url, '_self');
              }
            },
          });
      } else {
      }
    }
  }

  ngOnDestroy(): void {
    this.cash?.unsubscribe();
    this.online?.unsubscribe();
    this.param?.unsubscribe();
  }
}
