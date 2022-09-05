import { Injectable } from "@angular/core";
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {ToastrService} from "ngx-toastr";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
            this.toastr.error(error.error.message, 'Client Error');
          } else {
            if (error.error instanceof Object) {
              this.toastr.error(error.error.error, error.error.status.toString());
            } else {
              this.toastr.error(error.error, error.status.toString());
            }
          }
          return throwError(() => error);
        })
      )
  }
}

