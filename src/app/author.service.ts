import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from './author/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http : HttpClient) {
  }

  public getAuthor(author: string): Observable<Author[]> {
    return this.http.get<Author[]>(`http://54.36.182.43:25413/authors?author=${author}`);
  }
}
