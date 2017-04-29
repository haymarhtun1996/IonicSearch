import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {QuotesDetailPage} from '../quotes-detail/quotes-detail';
/**
 * Generated class for the QuotesList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quotes-list',
  templateUrl: 'quotes-list.html',
})
export class QuotesListPage {
  quotesList = [];
  filteredQuotes = [];
  isfiltered: boolean ;
  constructor(private navCtrl: NavController,private http:Http) {
    this.isfiltered=false;
    this.http.get('quotes.json')
    .map(res=>res.json())
    .subscribe(
      data=>{
        this.quotesList=data.quotes;
        
      },
      err=>console.log("error is "+err),
      ()=>console.log('read quotes Complete '+ this.quotesList)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesList');
  }

  searchQuotes(event) {
     if(event.target.value.length > 1) {
     var filteredJson = this.quotesList.filter(function (row) {
     if(row.author.indexOf(event.target.value) != -1) {
        return true
      } else {
        return false;
      }
  });
  this.isfiltered = true;
  this.filteredQuotes = filteredJson;
              }
  }
  itemTapped(event, quote) {
                console.log(quote);
                this.navCtrl.push(QuotesDetailPage, {
                        quote: quote
                });
        }

}
