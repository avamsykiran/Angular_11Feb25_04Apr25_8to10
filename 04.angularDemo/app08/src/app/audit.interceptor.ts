import { HttpInterceptorFn } from '@angular/common/http';

export const auditInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("A reqeust to '" + req.url + "' is sent");
  return next(req);
};
