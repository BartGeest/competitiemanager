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
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
            this.toastr.error(error.error.message, 'Client Error');
          } else {
            errorMsg = `Error Code: ${error.status},  Message: ${error.error}`;
            this.toastr.error(error.message, error.status.toString());
          }
          return throwError(() => errorMsg);
        })
      )
  }
}

