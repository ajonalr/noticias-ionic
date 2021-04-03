import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../models/Noticia.mode';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public noticias: Article[] = [];
  constructor(
    private _nocioService: NoticiasService
  ) { }


  ngOnInit(): void {
    this.cargarNoticias();
  }

  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this._nocioService.getTopHetlines()
      .subscribe(
        (resp) => {

          if (resp.articles.length === 0) {
            event.target.disabled= true;
            event.target.complete();
            return;
          }

          this.noticias.push(...resp.articles);

          if(event){
              event.target.complete();
          }

        }
      )
  }

}
