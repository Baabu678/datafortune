import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'https://petstore.swagger.io/?url=https://gist.githubusercontent.com/jbhelm/17d76e8e095b5b4c2c238f77ee16043b/raw/23f24206aadf2e2cdc746555f7ebf4efaeae401e/CodeExerciseApi.yaml#/';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  key: string = "abcd";
  register(payload: any): Observable<any> {
    const url = `${BASE_URL}/API/post_api_registrations?key=${this.key}`;
    return this.http.post(url, payload).pipe(catchError(this.handleError));
  }

  getRegistration(id: string, key: string): Observable<any> {
    const url = `${BASE_URL}/${id}?key=${key}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  deleteRegistration(id: string, key: string): Observable<any> {
    const url = `${BASE_URL}/${id}?key=${key}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() =>
      error.error?.message || 'An error occurred during API request.'
    );
  }
}
