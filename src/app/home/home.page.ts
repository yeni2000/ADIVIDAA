import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num:number;
  mayormenor:string='';
  numSecret:number=this.numAleatorio(0,100);
intentos:number=0;
  constructor(public navCtrl: NavController) {}


  compruebaNumero(){

    

if(this.num)
{
if(this.numSecret < this.num)
{
  this.mayormenor='menor';
  }

  else if(this.numSecret >this.num)
  {
    this.mayormenor='mayor';
  }

  else{
    this.mayormenor='igual';
  }
}

  }
numAleatorio(a,b)
{
  return Math.round(Math.random()*(b-a)+parseInt(a));
}
reinicia(){

this.num =null;
this.mayormenor='';
this.numSecret=this.numAleatorio(0,100);

}

}
