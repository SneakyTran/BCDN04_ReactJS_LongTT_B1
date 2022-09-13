import React, { Component, Fragment } from "react";
import BannerComponent from "./BannerComponent";
import ItemComponent from "./ItemComponent";

export default class BodyComponent extends Component {
    render() {
        return (
            <div className="container px-lg-5">
                <BannerComponent />
                <ItemComponent />
            </div>
        );
    }
}
