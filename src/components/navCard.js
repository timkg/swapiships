import React, { Component } from "react";
import "./navCard.css";

export default class NavCard extends Component {
    render() {
        return (
            <div className="ship navCard">
                {this.props.children}
            </div>
        );
    }
}
