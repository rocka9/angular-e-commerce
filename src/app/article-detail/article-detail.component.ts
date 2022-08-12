import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../model/article'; // binds the component article to article-detail

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input() article?: Article;
  constructor() { }

  ngOnInit(): void {
  }

}