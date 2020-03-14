import React, { Component } from "react";
import NavCard from "./navCard";

import "./ships.css";

export default (props) => {
    return (
        <section className="ships">

            {/* <NavCard>
                <button onClick={props.fetchPrev}>prev</button>
            </NavCard> */}

            {props.starships.map((ship) => (
                <div className="ship">
                    <div>
                        <h4>{ship.name}</h4>
                        <dl>
                            <dt>Crew</dt>
                            <dd>{ship.crew == 0 ? "None" : ship.crew }</dd>
                            
                            <dt>Passengers</dt>
                            <dd>{ship.passengers == 0 ? "None" : ship.passengers}</dd>

                            <dt>Hyperdrive Rating</dt>
                            <dd>{ship.hyperdrive_rating}</dd>
                        </dl>
                    </div>
                </div>
            ))}

            {/* <NavCard>
                <button onClick={props.fetchNext}>next</button>
            </NavCard> */}

        </section>
    );
}
