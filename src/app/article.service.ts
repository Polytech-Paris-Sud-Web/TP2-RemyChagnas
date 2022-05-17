import { Injectable } from '@angular/core';
import Article from './article/article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor(private http : HttpClient) {
  }

  public getArticlesBDD(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  getArticleBDD(id: Number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public deleteBDD(id: Number): Observable<Object> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }

  public createBDD(title: String, content: String, author: String): Observable<Object> {
    return this.http.post('http://localhost:3000/articles', new Article(title, content, author));
  }
}
