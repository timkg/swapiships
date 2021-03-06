import React, { Component } from "react";
import "./ship.css";
import "./card.css";
import { HYPERDRIVE_MAX } from "../constants";

export default class Ship extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: ""
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                className: "in"
            })
        }, 10)
    }

    render() {
        const { name, crew, passengers, hyperdrive_rating} = this.props;

        return (
            <div tabIndex={-1} className={`card ship ${this.state.className}`}>
                <div>
                    <h4>{name}</h4>
                    <dl>
                        <dt>Crew</dt>
                        <dd>{crew == 0 ? "None" : crew }</dd>
                        
                        <dt>Passengers</dt>
                        <dd>{passengers == 0 ? "None" : passengers}</dd>
    
                        <dt>Hyperdrive Rating</dt>
                        <dd>
                            <progress max={HYPERDRIVE_MAX} value={hyperdrive_rating === "unknown" ? 0 : hyperdrive_rating}></progress>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}
