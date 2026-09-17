import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  enviarCotizacion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cotizaciones`, data);
  }

  enviarContacto(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contactos`, data);
  }
}