import { Component, OnInit} from '@angular/core';
import { Article } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article: Article = {
    id:1,
    name: "Jean",
    price: "60 euros"
}
  title = 'angular-e-commerce';
}
