import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { map } from "rxjs/operators";
import { ArticleByCategoryAndPage } from '../interfaces/index';


const apliKey= environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private articleByCategory : ArticleByCategoryAndPage = {};

  constructor( private http : HttpClient) { }

  getTopHeadlines  () : Observable<Article[]>{
      return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-27&sortBy=publishedAt&apiKey=${apliKey}`,
      {
        params: {
          apliKey
        }
      }).pipe(
        map( resp => resp.articles));
  }


  getTopHeadlinesCategory  ( category : string, loadMOre : Boolean  = false) : Observable<Article[]>{ 
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apliKey}`,
    {
      params: {
        apliKey
      }
    }).pipe(
      map( resp => resp.articles));
  }



}
