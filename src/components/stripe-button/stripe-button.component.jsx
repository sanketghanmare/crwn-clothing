import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    alert("Payment Successful")
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HH8B0AxZppmnO3EyRsfnnUDE6xYI822c8M8xHJc4Te4iBvsfqDCujWXNmOznTi1OtCwd9J0IkqbEouR85ZeutSa00NrgjLRJI'

    return (
        <StripeCheckout
        label = "Pay Now"
        name = "CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
