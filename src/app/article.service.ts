import { Injectable } from '@angular/core';
import Article from './article/article';
import {HttpClient} from "@angular/common/http";
import {Observable, lastValueFrom } from "rxjs";
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://54.36.182.43:25413/articles");
  }

  public getArticlesWithFilter(filter: string): Observable<Article[]> {
    return this.http.get<Article[]>("http://54.36.182.43:25413/articles").pipe(map(
      articles => articles.filter(article => {
        console.log(article.title.includes(filter) || article.content.includes(filter))
        return article.title.includes(filter) ||  article.content.includes(filter)
      }))
    );
  }

  public getArticle(id: Number): Observable<Article> {
    return this.http.get<Article>(`http://54.36.182.43:25413/articles/${id}`);
  }

  public delete(id: Number): Observable<Object> {
    return this.http.delete(`http://54.36.182.43:25413/articles/${id}`);
  }

  public create(title: string, content: string, author: string): Observable<Object> {
    return this.http.post('http://54.36.182.43:25413/articles', new Article(title, content, author));
  }
}
