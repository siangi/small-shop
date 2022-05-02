import React from "react";
import { useState } from "react";

function Checkoutform() {
    const [method, setMethod] = useState("");

    function submit(e) {
        e.preventDefault();
    }

    return (
        <div id="checkout">
            <h3>Checkout Form</h3>
            <form onSubmit={submit}>
                <fieldset>
                    <legend>Contact Information</legend>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" name="full-name" id="full-name" required />
                    <label htmlFor="e-mail">E-Mail</label>
                    <input type="email" name="e-mail" id="e-mail" required />
                </fieldset>
                <fieldset>
                    <legend>Payment Method</legend>
                    <label htmlFor="mobile-pay">
                        <input type="radio" name="pay-method" id="mobile-pay" value="mobile-pay" onChange={() => setMethod("mobile-pay")} required />
                        Mobile Pay
                    </label>
                    <label htmlFor="credit-card">
                        <input type="radio" name="pay-method" id="credit-card" value="credit-card" onChange={() => setMethod("credit-card")} required />
                        Credit Card
                    </label>
                    <label htmlFor="bank-transfer">
                        <input type="radio" name="pay-method" id="bank-transfer" value="bank-transfer" onChange={() => setMethod("bank-transfer")} required />
                        Bank Transfer
                    </label>
                    {method === "mobile-pay" && (
                        <>
                            <h3>Mobile Pay Number</h3>
                            <h3>6 4 0 1 2 3</h3>
                        </>
                    )}
                    {method === "credit-card" && (
                        <>
                            <label htmlFor="card-number">
                                Credit Card Number
                                <input type="text" name="card-number" id="card-number" required />
                            </label>

                            <label htmlFor="expiry-date">
                                Expiration Date
                                <input type="text" name="expiry-date" id="expiry-date" required />
                            </label>

                            <label htmlFor="ccv">
                                CCV
                                <input type="text" name="ccv" id="ccv" required />
                            </label>
                        </>
                    )}
                    {method === "bank-transfer" && (
                        <>
                            <label htmlFor="address">
                                Street & number
                                <input type="address"></input>
                            </label>

                            <label htmlFor="zip-code">
                                Zip Code
                                <input type="text" name="zip-code" id="zip-code" />
                            </label>

                            <label htmlFor="city-name">
                                City Name
                                <input type="text" name="city" id="city" />
                            </label>
                            <p>
                                The bill will be sent to your e-mail <address></address>
                            </p>
                        </>
                    )}
                </fieldset>
                <button type="submit">Check out</button>
            </form>
        </div>
    );
}

export default Checkoutform;
