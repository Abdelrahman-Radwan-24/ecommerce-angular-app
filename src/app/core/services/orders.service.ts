import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly _HttpClient = inject(HttpClient);

  cashOrder(id: string, detailsOrder: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/orders/${id}`,
      { shippingAddress: detailsOrder },
      { observe: 'response' }
    );
  }

  onlineOrder(id: string, detailsOrder: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=${environment.urlServer}`,
      { shippingAddress: detailsOrder },
      { observe: 'response' }
    );
  }

  getUserOrders(id: string): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/api/v1/orders/user/${id}`,
      { observe: 'response' }
    );
  }
}
