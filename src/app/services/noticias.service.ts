import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseTopHedlines } from '../models/Noticia.mode';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  api_key = environment.apiKey;

  constructor(
    private http: HttpClient
  ) { }

  getTopHetlines() {
    return this.http.get<ResponseTopHedlines>(`http://newsapi.org/v2/everything?q=tesla&from=2021-01-27&sortBy=publishedAt&apiKey=${this.api_key}`)
    
  }
}
