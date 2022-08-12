import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../model/article'; // binds the component article to article-detail
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input() article?: Article;

  constructor(
    private route: ActivatedRoute,  // holds information about the route to this instance of the ArticleDetailComponent
    private articleService: ArticleService, // gets article data from the remote server and this component uses it to get the article-to-display
    private location: Location  // Angular service for interacting with the browser.
  ) {}

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // paramMap is a dictionary of route parameter values extracted from the URL
    // Route parameters are always strings. The JavaScript Number function converts the string to a number, which is what a article id should be.

    this.articleService.getArticle(id).subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

}
