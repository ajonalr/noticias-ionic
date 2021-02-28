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
    this._nocioService.getTopHetlines()
      .subscribe(
        (resp) => {

          this.noticias.push(...resp.articles);

        }
      )
  }

}
