import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private readonly _HttpClient = inject(HttpClient);

  countWishlist: WritableSignal<number[]> = signal([]);

  addProductToWishlist(id: string): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/wishlist`,
      { productId: id },
      { observe: 'response' }
    );
  }

  getLoggedUserWishlist(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`, {
      observe: 'response',
    });
  }

  RemoveProductFromWishlist(id: string): Observable<any> {
    return this._HttpClient.delete(
      `${environment.baseUrl}/api/v1/wishlist/${id}`,
      { observe: 'response' }
    );
  }
}
