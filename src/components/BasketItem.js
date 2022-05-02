import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

function BasketItem(props) {
    return (
        <li>
            <h3>{props.productdisplayname}</h3>
            <div className="amount-group">
                <Button type="text" icon={<MinusOutlined></MinusOutlined>} onClick={() => props.changeAmount(props.id, false)} />
                <p>{props.amount}</p>
                <Button type="text" icon={<PlusOutlined />} onClick={() => props.changeAmount(props.id, true)} />
                <Button type="text" icon={<DeleteOutlined />} onClick={() => props.deleteItem(props.id)} />
            </div>
            <span>{(props.price * props.amount).toFixed(2)} Kr.</span>
        </li>
    );
}

export default BasketItem;
