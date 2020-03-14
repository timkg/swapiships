import React, { Component } from "react";
import "./loading.css";

export default class Loading extends Component {
    render() {
        return (
            <div className={`loading-container ${this.props.isTransitioningOut ? "isTransitioningOut" : ""}`}>
                <div className="star-wars">
                    <div className="crawl">
                        <div className="title">
                            <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
