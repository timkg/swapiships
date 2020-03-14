import React, { Component } from "react";
import Ship from "./ship";

import "./ships.css";

export default (props) => {
    return (
        <section className="ships">

            {/* <NavCard>
                <button onClick={props.fetchPrev}>prev</button>
            </NavCard> */}

            {props.starships.map((ship) => (
                <Ship {...ship} />
            ))}

            {/* <NavCard>
                <button onClick={props.fetchNext}>next</button>
            </NavCard> */}

        </section>
    );
}
