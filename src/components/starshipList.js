import React, { Component } from "react";

export default class StarshipList extends Component {

    render() {
        return (
            <div>
                {this.props.fetchPrev 
                    ? <button onClick={this.props.fetchPrev}>prev</button> 
                    : <button disabled>prev</button>}
                {this.props.fetchNext
                    ? <button onClick={this.props.fetchNext}>next</button>
                    : <button disabled>next</button>}
                {this.props.starships.map(ship => (
                    <div className="ship">
                        <h4>{ship.name}</h4>
                        <ul>
                            <li>Crew: {ship.crew == 0 ? "None" : ship.crew }</li>
                            <li>Passengers: {ship.passengers == 0 ? "None" : ship.passengers}</li>
                            <li>Hyperdrive Rating: {ship.hyperdrive_rating}</li>
                        </ul>
                    </div>
                ))}
            </div>
        );
    }

}
