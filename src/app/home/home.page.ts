import { Component } from '@angular/core';
declare var RazorpayCheckout: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paymentAmount: number = 333;
  currency: string = 'USD';
  currencyIcon: string = '$';
  razor_key = 'rzp_test_urJcWW5CCTcr8V';
  cardDetails: any = {};

  constructor() {
  }

  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency,
      key: this.razor_key,
      amount: this.paymentAmount,
      name: 'foo',
      prefill: {
        email: 'admin@enappd.com',
        contact: '9621323231',
        name: 'Enappd'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }


}
