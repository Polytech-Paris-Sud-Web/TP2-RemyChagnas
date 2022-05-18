import { Injectable } from '@angular/core';
import Article from './article/article';
import {HttpClient} from "@angular/common/http";
import {Observable, lastValueFrom } from "rxjs";
import { map } from "rxjs/operators"; 
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AuthorService } from './author.service';
import Author from './authors/author';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticlesWithFilter(filter: string): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles").pipe(map(
      articles => articles.filter(article => {
        console.log(article.title.includes(filter) || article.content.includes(filter))
        return article.title.includes(filter) ||  article.content.includes(filter)
      }))
    );
  }

  public getArticle(id: Number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public delete(id: Number): Observable<Object> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }

  public create(title: string, content: string, author: string): Observable<Object> {
    return this.http.post('http://localhost:3000/articles', new Article(title, content, author));
  }
}
