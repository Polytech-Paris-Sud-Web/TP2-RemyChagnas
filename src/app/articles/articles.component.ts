import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import Article from '../article/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articlesBDD: Article[] | undefined;

  constructor(private articleService: ArticleService, ) {
  }

  ngOnInit() {
    this.articleService.getArticlesBDD().subscribe({next: (data) => this.articlesBDD = data});
  }

  deleteBDD(article : Article) {

    const id = article.id;

    this.articleService.deleteBDD(id).subscribe({next: () => this.articleService.getArticlesBDD().subscribe({next: (data) => this.articlesBDD = data})});
  }
}
