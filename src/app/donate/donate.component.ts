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
    this.donateButtonText = `€${this.donationAmount},- NOW`;
    this.donateActivity = this.descriptions[Number(this.selectedAmount)];
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

  donationAmount: number = 40;
  text: string = '';
  donateButtonText = '';
  defaultAmount = true;
  selectedAmount = '1';
  descriptions = ['This will help 25 kids to all our materials', 'This buys us one laptop for children to educate themselves', 'This will enable us to continue our work for 2 years!']
  donateActivity = '';

  onDonate(_amount, _button){
    this.donationAmount = _amount;
    this.defaultAmount = true;
    this.donateButtonText = `€${_amount},- NOW`;
    this.selectedAmount = _button;
    this.donateActivity = this.descriptions[Number(_button)];
  }

  onDonateSubmit(){
    console.log('submit', this.donationAmount);
    if(this.defaultAmount) {
      switch(this.donationAmount) {
        case 20:
          console.log('case 20')
          window.open('https://useplink.com/payment/FSBekzAldzDyrkX1WsZi/', '_blank');
          break;
          case 40:
            window.open('https://useplink.com/payment/OAnOn2oQZSm6tpNYk65Y/', '_blank');
            console.log('case 40')
            break;
          case 60:
            window.open('https://useplink.com/payment/R6QdVudgo7Yyd0XgAmld/', '_blank');
            console.log('case 60')
        break;
      }
    } else if (!this.donationAmount || this.donationAmount <= 0) {
      alert('this does not appear to be a valid donation amount');
    } else {
      window.open(`https://useplink.com/payment/RidtebYiHnVWedDLjoYz/EUR${this.donationAmount}`, '_blank');
    }
  }

  onInputChange(_value){
    this.text = _value;
    this.defaultAmount = false;
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

    // if (!this.addScript) {
    //   this.addPaypalScript().then(() => {
    //     paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
    //     this.paypalLoad = false;
    //   })
    // }
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
