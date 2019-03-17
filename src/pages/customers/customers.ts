import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { CustomerdetailPage } from '../customerdetail/customerdetail';
/**
 * Generated class for the CustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {
  allCusts : any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public data: CustomerProvider ) {
      this.data.loadAll().then(result=>{this.allCusts = result});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }

  showCustomer(custId){
    this.navCtrl.push(CustomerdetailPage,{id: custId});
  }
}
