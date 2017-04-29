import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QuotesListPage } from '../pages/quotes-list/quotes-list';
import { QuotesDetailPage } from '../pages/quotes-detail/quotes-detail';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    QuotesListPage,
    QuotesDetailPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuotesListPage,
    QuotesDetailPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
