import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/Noticia.mode';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {


  @Input() noticias: Article;
  @Input() index: number;


  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() { }


  arbirNoticia() {
    const browser = this.iab.create(this.noticias.url, '_system');
  }



  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
        text: 'Share',
        icon: 'share-social-outline',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticias.title,
            this.noticias.source.name,
            '',
            this.noticias.url
          )
        }
      },
      {
        text: 'Favorito',
        icon: 'star',
        handler: () => {
          console.log('Favorito clicked');
        }
      }, 
      
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }



}
