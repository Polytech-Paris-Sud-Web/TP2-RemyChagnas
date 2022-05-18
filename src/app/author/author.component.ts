import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../author.service';
import Author from './author';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

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
