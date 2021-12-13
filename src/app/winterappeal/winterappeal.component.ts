import { Component, OnInit, AfterViewChecked } from '@angular/core';


declare let paypal: any;

@Component({
  selector: 'app-donate',
  templateUrl: './winterappeal.component.html',
  styleUrls: ['./winterappeal.component.css']
})
export class WinterAppealComponent implements AfterViewChecked{

  constructor() {
  }

  ngOnInit() {
   // this.donateButtonText = `€${this.donationAmount},- NOW`;
   // this.donateActivity = this.descriptions[Number(this.selectedAmount)];
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  donationAmount: number = 20;
  text: string = '';
  donateButtonText = '';
  defaultAmount = true;
  selectedAmount = '1';
  descriptions = [
    'Every little bit counts! This amount will help us save one child for a year by providing them with Landmine Risk Eduction.',
    'Great! This amount will help us save a child and their best friend for a year!',
    'NICE! This amount will help us save and educate five children for a year!',
    'WOW!! You are phenomenal! This amount helps to cover the costs of the software package and transport for one laptop.']
  donateActivity = '';

  onDonate(_amount, _button){
    this.donationAmount = _amount;
    this.defaultAmount = true;
    this.donateButtonText = `€${_amount},- NOW`;
    this.selectedAmount = _button;

  }





 ngAfterViewChecked(): void {

    // if (!this.addScript) {
    //   this.addPaypalScript().then(() => {
    //     paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
    //     this.paypalLoad = false;
    //   })
    // }
  }



}
