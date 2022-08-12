import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

// Import ARTICLES from ArticlesComponent
import { ARTICLES } from '../list-articles';

@Component({
  selector: 'app-articles', // The component's CSS element selector.
  templateUrl: './articles.component.html', // The location of the component's template file.
  styleUrls: ['./articles.component.css'] // The location of the component's private CSS styles.
})

// by exporting the class, it can be imported elsewhere in the application
export class ArticlesComponent implements OnInit {

  // event binding on selected article
  selectedArticle?: Article;
  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  articles = ARTICLES;  // expose the ARTICLES array for binding.
  // article property
  article: Article = {
    id:1,
    name: "Jean",
    price: "60 euros"
}
  constructor() { }

  ngOnInit(): void {
  }

}
