import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles', // The component's CSS element selector.
  templateUrl: './articles.component.html', // The location of the component's template file.
  styleUrls: ['./articles.component.css'] // The location of the component's private CSS styles.
})
export class ArticlesComponent implements OnInit {
  // by exporting the class, it can be imported elsewhere in the application

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
