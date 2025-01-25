import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IShoworders } from '../../core/interfaces/ishoworders';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { AuthService } from '../../core/services/auth.service';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [TermtextPipe, CurrencyPipe, TranslateModule],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss',
})
export class AllordersComponent implements OnInit, OnDestroy {
  private readonly _OrdersService = inject(OrdersService);
  private readonly _AuthService = inject(AuthService);
  orders!: Subscription;
  allOrders: IShoworders[] = [];

  ngOnInit(): void {
    this._AuthService.setUserData();
    let id = this._AuthService.userData.id;
    this.orders = this._OrdersService.getUserOrders(id).subscribe({
      next: (res) => {
        if (res.status == 200) {
          this.allOrders = res.body;
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.orders?.unsubscribe();
  }
}
