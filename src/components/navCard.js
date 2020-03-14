import React, { Component } from "react";
import "./card.css";

export default class NavCard extends Component {

    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div className="card nav" tabIndex={0} onKeyPress={this.handleKeyPress} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}
