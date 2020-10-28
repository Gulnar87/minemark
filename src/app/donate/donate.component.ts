import { Component, OnInit, AfterViewChecked } from '@angular/core';


declare let paypal: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements AfterViewChecked{

  constructor() {
  }

  ngOnInit() {
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  donationAmount: number;
  text: string = '';
  donateButtonText = '';
  defaultAmount = false;
  selectedAmount = ''

  onDonate(_amount, _button){
    this.donationAmount = _amount;
    this.defaultAmount = true;
    this.donateButtonText = `€${_amount},- NOW`;
    this.selectedAmount = _button;
  }

  onDonateSubmit(){
    console.log('submit', this.donationAmount);
    if(this.donationAmount) {
      switch(this.donationAmount) {
        case 20:
          console.log('case 20')
          window.open('https://useplink.com/payment/ccA6BAngp1AT6kr3pB9U/', '_blank');
        break;
        case 40:
          console.log('case 40')
        break;
        case 60:
          console.log('case 60')
        break;
      }
    }
    else{

    }
  }

  onInputChange(_value){
    this.text = _value;
    this.defaultAmount = true;
    this.donationAmount = _value;
    this.donateButtonText = (_value!== null) ? `€${_value},- NOW` : '';
    this.selectedAmount = '';
  }

  finalAmount: number = 1;

    paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'Af3iEM9gCUyDiBslOvB-L2_-fEhX42f6a3nS54ejh0IBPtyCqs4iSe5xpdzQUApxLCpdb2FFOkpab3a7',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

 ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

    addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
