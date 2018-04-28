import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';


const CURRENCY = 'USD';

const successPayment = data => {
    console.log(data);
    alert('Payment Successful');
};

const errorPayment = data => {
    alert('Payment Error');
};

const onToken = (amount, description) => token =>
    axios.post('/charge',
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: amount
        })
        .then(successPayment)
        .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
    <StripeCheckout
        name={name}
        description={description}
        amount={amount}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
    />

export default Checkout;