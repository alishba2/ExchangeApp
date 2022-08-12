import { Injectable } from '@angular/core';
import { Iexchange } from './exchange-rate/exchangeRate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhangeRateService {

  constructor(private http : HttpClient) { }
  getExchange(api_key:any, Base:any, Target:any):Observable<Iexchange[]>{
   return this.http.get<Iexchange[]>('https://exchange-rates.abstractapi.com/v1/live/?api_key='+api_key+'&base='+Base+'&target='+Target)
  }
}
