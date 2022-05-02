import React from "react";
import { useState } from "react";

function Checkoutform() {
    const [method, setMethod] = useState("");

    function submit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <h4>Payment Method</h4>
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
            {method === "mobile-pay" && <h3>Mobile Pay</h3>}
            {method === "credit-card" && <h3>Credit Card</h3>}
            {method === "bank-transfer" && <h3>Bank Transfer</h3>}
            <button type="submit">Check out</button>
        </form>
    );
}

export default Checkoutform;
