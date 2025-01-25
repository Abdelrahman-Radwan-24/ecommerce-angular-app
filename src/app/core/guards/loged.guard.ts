import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  let _PLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(_PLATFORM_ID)) {
    const token = localStorage.getItem('userToken');
    if (token == null || token == 'undefined') {
      return true;
    } else {
      _Router.navigate(['/home']);
      return false;
    }
  } else {
    return false;
  }

};
