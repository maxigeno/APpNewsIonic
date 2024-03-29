import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Article } from '../../interfaces/index';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article! : Article;
  
  @Input() i! : number;

  constructor() { }

  ngOnInit() {}

}
