import { Component, OnInit, AfterViewChecked } from '@angular/core';
import createMollieClient from '@mollie/api-client';

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
    const mollieClient = createMollieClient({ apiKey: 'test_5gMdj9d7fFBVuT6rffM4tEP5CtnW3e' });

    console.log('init', mollieClient);

    mollieClient.payments.create({
      amount: {
        value:    '10.00',
        currency: 'EUR'
      },
      description: 'My first API payment',
      redirectUrl: 'https://yourwebshop.example.org/order/123456',
      webhookUrl:  'https://yourwebshop.example.org/webhook'
    })
      .then(payment => {
        console.log('payment', payment);
        // Forward the customer to the payment.getCheckoutUrl()
      })
      .catch(error => {
        // Handle the error
        console.log('error', error);
      });
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;

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
