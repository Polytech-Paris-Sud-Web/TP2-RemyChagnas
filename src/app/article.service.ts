import { Injectable } from '@angular/core';
import Article from './article/article';
import {HttpClient} from "@angular/common/http";
import {Observable, lastValueFrom } from "rxjs";
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  readonly serviceUrl: string = 'https://bdd.remychagnas.fr/'

  constructor(private http : HttpClient) {
  }

  /**
   * Get all articles
   * @returns all articles from BDD
   */
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.serviceUrl}articles`);
  }

  /**
   * Get specific article
   * @param id 
   * @returns article specified by id
   */
  public getArticle(id: Number): Observable<Article> {
    return this.http.get<Article>(`${this.serviceUrl}articles/${id}`);
  }

  /**
   * Delete article
   * @param id 
   * @returns 
   */
  public delete(id: Number): Observable<Object> {
    return this.http.delete(`${this.serviceUrl}articles/${id}`);
  }

  /**
   * Create new article
   * @param title 
   * @param content 
   * @param author 
   * @returns 
   */
  public create(title: string, content: string, author: string): Observable<Object> {
    return this.http.post(`${this.serviceUrl}articles`, new Article(title, content, author));
  }
}
