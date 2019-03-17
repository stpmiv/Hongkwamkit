import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {
  data: any;
  constructor(public http: HttpClient) {
    //console.log('Hello CustomerProvider Provider');*/
    this.data = [
      {id:"1",name:"Sathaporn",tel:"023456789",address: "39/4 moo.3 taladjinda sampran nakhonpathom"},
      {id:"2",name:"nana",tel:"013456789",address: "39/4 moo.3 taladjinda sampran nakhonpathom"},
      {id:"3",name:"kaka",tel:"012456789",address: "39/4 moo.3 taladjinda sampran nakhonpathom"},
    ];
  }

  loadAll(){
    return Promise.resolve(this.data);
  }

  getCustomerById(id){
    for(var i=0;i<(this.data).length;i++){
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i]);
    }
  }
}
}