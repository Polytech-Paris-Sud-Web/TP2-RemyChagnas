import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from './authors/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http : HttpClient) {
  }

  public getAuthor(author: string): Observable<Author[]> {
    return this.http.get<Author[]>(`http://localhost:3000/authors?author=${author}`);
  }
}
