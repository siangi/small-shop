import React from "react";
import { Menu } from "antd";

function Navigation() {
    const items = [{ label: "Home" }, { label: "Supply Chain" }, { label: "Sustainability" }];
    return (
        <div className="navigation">
            <Menu mode="horizontal" theme="dark" items={items}></Menu>
        </div>
    );
}

export default Navigation;
