import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../article.service';
import Article from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    
  @Input()
  article: Article | undefined;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private articleService: ArticleService, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params['id'] != undefined) {
        this.articleService.getArticle(params['id']).subscribe({next: (data) => this.article = data});
      }
    });
  }

  /**
   * Say that delete button was pressed
   */
  public delete() {
    this.deletedArticle.emit(this.article);
  }
}
