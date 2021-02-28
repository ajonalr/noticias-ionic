import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/Noticia.mode';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {


  @Input() noticias: Article;
  @Input() index: number;


  constructor() { }

  ngOnInit() {}

}
