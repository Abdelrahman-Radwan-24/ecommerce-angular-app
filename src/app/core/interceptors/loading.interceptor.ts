import { HttpInterceptorFn } from '@angular/common/http';
import { inject, RendererFactory2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const _NgxSpinnerService = inject(NgxSpinnerService);

  const _RendererFactory2 = inject(RendererFactory2).createRenderer(null, null);

  _RendererFactory2.setStyle(document.documentElement, 'overflow', 'hidden');

  _NgxSpinnerService.show();

  return next(req).pipe(
    finalize(() => {
      _NgxSpinnerService.hide();

      _RendererFactory2.setStyle(
        document.documentElement,
        'overflow',
        'visible'
      );
    })
  );
};
