import React, { Component } from "react";
import "./FooterComponent.css";

export default class FooterComponent extends Component {
    render() {
        return (
            <footer className="py-5">
                <div class="container">
                    <p class="m-0 text-center text-white">
                        Copyright © Your Website 2022
                    </p>
                </div>
            </footer>
        );
    }
}
