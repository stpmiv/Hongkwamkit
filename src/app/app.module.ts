import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage} from '../pages/about/about';
import { ComunityPage} from '../pages/comunity/comunity';
import { GalleryPage} from '../pages/gallery/gallery';
import { SlidesPage} from '../pages/slides/slides';
import { CustomerProvider } from '../providers/customer/customer';
import { CustomersPage } from '../pages/customers/customers';
import { CustomerdetailPage } from '../pages/customerdetail/customerdetail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ComunityPage,
    GalleryPage,
    SlidesPage,
    CustomersPage,
    CustomerdetailPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ComunityPage,
    GalleryPage,
    SlidesPage,
    CustomersPage,
    CustomerdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider
  ]
})
export class AppModule {}
