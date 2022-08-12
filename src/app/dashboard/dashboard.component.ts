import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { } // expects Angular to inject the ArticleService into a private articleService property

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    // returns the sliced list of articles at positions 1 and 4, returning only Articles 2, 3, and 4
    this.articleService.getArticles().subscribe(articles => this.articles = articles.slice(1,4));
  }

}
