import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  //Chave de acesso à API
  private API_KEY = '45f8d6a48ac2279c8954243037bb47b8';

  constructor(private http: HttpClient) {}

  //Função para fazer o get na API e retornar os dados. Interpolei a cidade digitada pelo usuário na URL bem como a chave da API
  getCurrentWeather(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric&lang=pt_br`;
    return this.http.get<any>(url);
  }
}
