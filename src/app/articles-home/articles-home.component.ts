import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import Article from '../article/article';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.css']
})
export class ArticlesHomeComponent implements OnInit {

  articlesBDD: Article[] | undefined;

  constructor(private articleService: ArticleService, ) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe({next: (data) => {
      this.articlesBDD = data;
    }});
  }

  deleteBDD(article : Article) {

    const id = article.id;

    this.articleService.delete(id).subscribe({next: () => this.articleService.getArticles().subscribe({next: (data) => {
      this.articlesBDD = data;
    }})});
  }

  getArticles(): Article[] | undefined {
    return this.articlesBDD?.sort(( a: Article, b: Article ) => b.id - a.id).slice(0, 10);
  }
}
