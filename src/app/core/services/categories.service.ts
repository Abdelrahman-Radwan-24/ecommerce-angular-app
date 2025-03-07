import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private readonly _HttpClient: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`, {
      observe: 'response',
    });
  }

  getSpecificCatrgory(id: string | null): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/api/v1/categories/${id}`,
      { observe: 'response' }
    );
  }
}
