import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseTopHedlines } from '../models/Noticia.mode';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  api_key = environment.apiKey;
  pageNumber = 0;

  constructor(
    private http: HttpClient
  ) { }

  getTopHetlines() {

    this.pageNumber ++;    

    return this.http.get<ResponseTopHedlines>(`http://newsapi.org/v2/everything?q=apple&from=2021-03-13&to=2021-03-13&sortBy=popularity&page=${this.pageNumber}&apiKey=${this.api_key}`)
    
  }


  getTopHeadLineCategoria(categoria: string) {

    return this.http.get<ResponseTopHedlines>(`https://newsapi.org/v2/top-headlines?country=de&category=${categoria}&apiKey=${this.api_key}`)

  }
}
