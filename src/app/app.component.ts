import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

original:number;
guess:number;
nooftries:number;
deviation:number;


constructor()
{
  this.initializeVar();
  console.log(this.original);
  
}
initializeVar()
{
  this.original= Math.floor((Math.random() * 1000) + 1);
  this.nooftries=0;
  this.guess=null;
  this.deviation=null;
}
verifyGuess()
{
  this.deviation=this.original-this.guess;
  this.nooftries=this.nooftries+1;
}




}
