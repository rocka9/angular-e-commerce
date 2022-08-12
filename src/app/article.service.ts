// service allows sharing information among classes tha don't know each other
// The ArticleService could get article data from anywhere such as a web service, local storage, or a mock data source.

import { Injectable } from '@angular/core';
import { Article } from './model/article';
import { ARTICLES } from './list-articles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})

export class ArticleService {
  constructor(private messageService: MessageService) { }

  getArticles(): Observable<Article[]> {
    const articles = of(ARTICLES);
    this.messageService.add('ArticlesService: fetched articles');
    return articles;
  }

  getArticle(id: number) : Observable< Article > {
    const article = ARTICLES.find(article => article.id ===id)!;
    this.messageService.add(`ArticleService: fetched article id=${id}`); // send a message from ArticleService
    return of(article);
  }

}
