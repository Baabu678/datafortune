import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ScreenDefinition {
  id?: number;
  name: string;
  definitionJson: string;
}

@Injectable({ providedIn: 'root' })
export class ScreenService {
  private apiUrl = '/api/Screen';

  constructor(private http: HttpClient) {}

  getScreens(): Observable<ScreenDefinition[]> {
    return this.http.get<ScreenDefinition[]>(this.apiUrl);
  }

  createScreen(screen: ScreenDefinition): Observable<ScreenDefinition> {
    return this.http.post<ScreenDefinition>(this.apiUrl, screen);
  }
}
