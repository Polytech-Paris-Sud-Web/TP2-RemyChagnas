import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from './author/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  readonly serviceUrl: string = 'https://bdd.remychagnas.fr/'

  constructor(private http : HttpClient) {
  }

  public getAuthor(author: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.serviceUrl}authors?author=${author}`);
  }
}
