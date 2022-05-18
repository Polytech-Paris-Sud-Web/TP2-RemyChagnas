import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../author.service';
import Article from '../article/article';
import Author from './author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  @Input()
  author: Author;

  constructor(private authorService: AuthorService, private route: ActivatedRoute) {
    this.author = new Author(undefined,'undefined');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.authorService.getAuthor(params['author']).subscribe({next: (data: Author[]) => {
          this.author = data[0];
        }});
    });
  }
}
