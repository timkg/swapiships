import React, { Component } from "react";
import Ship from "./ship";
import NavCard from "./navCard";

import "./ships.css";

export default (props) => {
    return (
        <section className="ships">

            {props.fetchPrev && 
                <NavCard onClick={props.fetchPrev}>
                    <img src="/prev.svg" alt="Load previous list of star ships"/>
                </NavCard>
            }

            {props.starships.map((ship) => (
                <Ship key={ship.url} {...ship} />
            ))}

            {props.fetchNext && 
                <NavCard onClick={props.fetchNext}>
                    <img src="/next.svg" alt="Load next list of star ships"/>
                </NavCard>
            }

        </section>
    );
}
