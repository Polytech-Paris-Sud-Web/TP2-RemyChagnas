import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;
  message: String | undefined;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private authorService: AuthorService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
    this.message = '';
  }

  /**
   * Create new article
   */
  public createArticle() {

    const { title, content, authors } = this.articleForm.value;
    this.authorService.getAuthor(authors).subscribe((data) => {
      if(data[0] !== undefined) {
        this.articleService.create(
          title,
          content,
          authors
        ).subscribe(() => this.message = 'Article created !');
      } else {
        this.message = 'This author does not exist !'
      }
    });
  }
}
