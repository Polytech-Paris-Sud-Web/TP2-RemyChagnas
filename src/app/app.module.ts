import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { AuthorService } from './author.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticlesHomeComponent } from './articles-home/articles-home.component';
import { AuthorsComponent } from './authors/authors.component';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  {
    path: "articles/:id",
    component: ArticleComponent
  },
  {
    path: "authors/:author",
    component: AuthorsComponent
  },
  { path: '', component: ArticlesHomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticlesHomeComponent,
    AuthorsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [ArticleService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }