import { Component } from '@angular/core';
declare var RazorpayCheckout: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  paymentAmount: number = 5000;
  currency: string = 'INR';
  currencyIcon: string = '₹';
  razor_key = 'rzp_test_urJcWW5CCTcr8V';
  cardDetails: any = {};

  constructor() {
  }

  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'assets/icon/puthiyapaathai_payament_avatar.png',
      currency: this.currency,
      key: this.razor_key,
      amount: this.paymentAmount*100,
      name: 'test',
      prefill: {
        email: 'gowtham@enappd.com',
        contact: '8667361738',
        name: 'Gowtham'
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
