// service allows sharing information among classes tha don't know each other
// The ArticleService could get article data from anywhere such as a web service, local storage, or a mock data source.

import { Injectable } from '@angular/core';
import { Article } from './model/article';
import { ARTICLES } from './list-articles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles() : Observable< Article[] > {  // getArticles method return list of articles
    const articles = of(ARTICLES); // of(ARTICLES) returns an Observable<Article[]> that emits a single value, the array of list heroes.
    this.messageService.add('ArticleService: fetched articles'); // send a message from ArticleService
    return articles;
  }
  constructor(private messageService: MessageService) { }
}
