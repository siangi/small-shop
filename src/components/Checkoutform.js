import React from "react";
import { useState } from "react";
import { Button, Input, Radio } from "antd";

const payMethodOptions = [
    { label: "Mobile Pay", value: "mobile-pay" },
    { label: "Credit Card", value: "credit-card" },
    { label: "Bank Transfer", value: "bank-transfer" },
];

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
                    <Input type="text" name="full-name" id="full-name" required />
                    <label htmlFor="e-mail">E-Mail</label>
                    <Input type="email" name="e-mail" id="e-mail" required />
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
                    <Radio.Group options={payMethodOptions} optionType="button" buttonStyle="solid" />
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
                                <Input name="card-number" id="card-number" required />
                            </label>

                            <label htmlFor="expiry-date">
                                Expiration Date
                                <Input name="expiry-date" id="expiry-date" required />
                            </label>

                            <label htmlFor="ccv">
                                CCV
                                <Input name="ccv" id="ccv" required />
                            </label>
                        </>
                    )}
                    {method === "bank-transfer" && (
                        <>
                            <label htmlFor="address">
                                Street & number
                                <Input name="address" id="address" />
                            </label>

                            <label htmlFor="zip-code">
                                Zip Code
                                <Input name="zip-code" id="zip-code" />
                            </label>

                            <label htmlFor="city-name">
                                City Name
                                <Input name="city" id="city" />
                            </label>
                            <p>The bill will be sent to your e-mail address</p>
                        </>
                    )}
                </fieldset>
                <Button type="primary">Check out</Button>
            </form>
        </div>
    );
}

export default Checkoutform;
