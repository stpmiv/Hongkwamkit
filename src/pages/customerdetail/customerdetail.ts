import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';

/**
 * Generated class for the CustomerdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerdetail',
  templateUrl: 'customerdetail.html',
})
export class CustomerdetailPage {
  cust:any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public data: CustomerProvider ) {
    this.data.getCustomerById(this.navParams.get('id'))
    .then(result=> {this.cust = result});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerdetailPage');
  }

}
