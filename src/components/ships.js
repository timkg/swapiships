import React, { Component } from "react";
import { Card, CardMedia, CardContent } from '@material-ui/core';
import "./ships.css";

export default (props) => {
    return (
        <div>
            {props.fetchPrev 
                ? <button onClick={props.fetchPrev}>prev</button> 
                : <button disabled>prev</button>}
            {props.fetchNext
                ? <button onClick={props.fetchNext}>next</button>
                : <button disabled>next</button>}
            
                <section className="ships">
                    <div className="ships-row">
                        {props.starships.slice(0, 5).map((ship) => (
                            <Card className="ship">
                                <CardMedia className="ship-image" />
                                <CardContent>
                                    <h4>{ship.name}</h4>
                                    <dl>
                                        <dt>Crew</dt>
                                        <dd>{ship.crew == 0 ? "None" : ship.crew }</dd>
                                        
                                        <dt>Passengers</dt>
                                        <dd>{ship.passengers == 0 ? "None" : ship.passengers}</dd>

                                        <dt>Hyperdrive Rating</dt>
                                        <dd>{ship.hyperdrive_rating}</dd>
                                    </dl>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="ships-row">
                        {props.starships.slice(5).map((ship) => (
                            <Card className="ship">
                                <CardMedia className="ship-image" />
                                <CardContent>
                                    <h4>{ship.name}</h4>
                                    <dl>
                                        <dt>Crew</dt>
                                        <dd>{ship.crew == 0 ? "None" : ship.crew }</dd>
                                        
                                        <dt>Passengers</dt>
                                        <dd>{ship.passengers == 0 ? "None" : ship.passengers}</dd>

                                        <dt>Hyperdrive Rating</dt>
                                        <dd>{ship.hyperdrive_rating}</dd>
                                    </dl>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
        </div>
    );
}
