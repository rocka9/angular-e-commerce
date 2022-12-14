import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

// Import ARTICLES from ArticlesComponent
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles', // The component's CSS element selector.
  templateUrl: './articles.component.html', // The location of the component's template file.
  styleUrls: ['./articles.component.css'] // The location of the component's private CSS styles.
})

// by exporting the class, it can be imported elsewhere in the application
export class ArticlesComponent implements OnInit {


  articles : Article[] = [];  // expose the ARTICLES array for binding.

  constructor( private articleService : ArticleService) { }

  // calling method getHeroes()
  ngOnInit(): void {
    this.getArticles();
  }

  // Retrieving the article from the service
  getArticles(): void {
    this.articleService.getArticles().subscribe(articles =>this.articles = articles);
  }



}
