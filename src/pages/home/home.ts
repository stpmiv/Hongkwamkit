import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ComunityPage } from '../comunity/comunity';
import { GalleryPage } from '../gallery/gallery';
import { SlidesPage } from '../slides/slides';
import { CustomersPage } from '../customers/customers';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
gotoabout(){
  this.navCtrl.push(AboutPage);
}
gotocomunity(){
  this.navCtrl.setRoot(ComunityPage);
}
gotogallery(){
  this.navCtrl.push(GalleryPage);
}
gotoslides(){
  this.navCtrl.push(SlidesPage);
}
gotocustomers(){
  this.navCtrl.push(CustomersPage);
}
}
