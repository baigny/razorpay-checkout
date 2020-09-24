import React, { useEffect, useState } from 'react';
export default function PayByRazorPay() {

    const [amount, setAmount] = useState("");

    const options = {
        key: 'rzp_test_Baj0ZJ8G2mlZZy',//'YOUR_KEY',
        amount: amount*100, //  = INR 1
        name: 'LevelApp',
        description: 'Payment for course',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        /* prefill: {
            name: '',
            contact: '',
            email: ''
        },
        notes: {
            address: ''
        }, */
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = (e) => {
        e.preventDefault();
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <form onSubmit={openPayModal}>
            <label htmlFor="basic-url">Amount</label>
            <input type="number" className="form-control"  id="basic-url" aria-describedby="basic-addon3" placeholder="Enter Amount" value={amount} onChange={e=>setAmount(e.target.value)}/>
            <br/>
           
            <button className="btn btn-primary btn-block mt-1 w-50 mx-auto" type="submit">Pay</button>
        </form>
    );
};