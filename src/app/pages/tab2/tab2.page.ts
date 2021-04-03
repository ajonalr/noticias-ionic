import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../models/Noticia.mode';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  categoria = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];


  constructor(
    private _noticiasService: NoticiasService
  ) { }


  ngOnInit() {

    this.cargarNoticias('business');

  }

  cambioCategoria(event) {
    this.noticias = [];
    let categoriaSearch = event.detail.value;
    this.cargarNoticias(categoriaSearch);

  }

  cargarNoticias(categoriaparam: string) {

    this._noticiasService.getTopHeadLineCategoria(categoriaparam).subscribe(
      (resp) => {
        this.noticias.push(...resp.articles);
      }
    );
  }





}
