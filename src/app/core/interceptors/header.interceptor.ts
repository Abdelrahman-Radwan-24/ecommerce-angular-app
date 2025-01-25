import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  if (
    localStorage.getItem('userToken') !== null &&
    localStorage.getItem('userToken') !== undefined
  ) {
    if (
      req.url.includes('wishlist') ||
      req.url.includes('orders') ||
      req.url.includes('cart')
    ) {
      req = req.clone({
        setHeaders: { token: localStorage.getItem('userToken')! },
      });
    }
  }

  return next(req);
};
