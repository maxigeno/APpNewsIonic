import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public categories : string[] = [
    "business", "entertainment", "general", "healthscience" ,"sports" ,"technology"
  ];

  //por defecto guardo la primera categoria y despues la seleccionada
  public selectedCategory : string = this.categories[0];
  
  public articles : Article[] = [];

  constructor( private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlinesCategory(this.selectedCategory)
    .subscribe( article => {
      this.articles = [...this.articles, ...article]
      //console.log(article);
    }); 
    
  }

  segmentChanged(ev: any) {
    //capturo el valor del segmento seleccionado
    this.selectedCategory = ev.detail.value;
    //filtro los articulos por la categoria seleccionada
    this.newsService.getTopHeadlinesCategory(this.selectedCategory)
    .subscribe( article => {
      this.articles = [/* ...this.articles, */ ...article]
      //console.log(article);
    }); 
  }
 

}
