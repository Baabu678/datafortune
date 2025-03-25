import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'https://codingexercise.speakcore.com/api';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  key: string = "sdnxjkn";
  private readonly apiUrl = BASE_URL+'/registrations?key=' + this.key;
  register(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload).pipe(
      catchError(this.handleError)
    );
  }
  getRegistration(registrationId: string): Observable<any> {
    const url = `${BASE_URL}/${registrationId}?key=${this.key}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  deleteRegistration(registrationId: string): Observable<any> {
    const url = `${BASE_URL}/registration/${registrationId}?key=${this.key}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() =>
      error.error?.message || 'An error occurred during API request.'
    );
  }
}
