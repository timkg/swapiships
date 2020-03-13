import React, { Component } from "react";
import Ships from "./ships";
import "./app.css";

const STATES = {
    "PENDING": "PENDING",
    "FULFILLED": "FULFILLED",
    "REJECTED": "REJECTED"
}

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: STATES.PENDING
        }
    }

    componentDidMount() {
        this.requestPage(1);
    }

    requestPage(pageNumber) {
        this.setState({
            status: STATES.PENDING
        });

        this.props.api.getPage(pageNumber)
            .then(response => {
                this.setState({
                    status: STATES.FULFILLED,
                    data: response
                })
            })
            .catch(reason => {
                this.setState({
                    status: STATES.REJECTED
                })
            })
    }

    requestUrl(url) {
        this.setState({
            status: STATES.PENDING
        });

        this.props.api.get(url)
            .then(response => {
                this.setState({
                    status: STATES.FULFILLED,
                    data: response
                })
            })
            .catch(reason => {
                this.setState({
                    status: STATES.REJECTED
                })
            })
    }

    render() {
        const { status, data } = this.state;
        const fetchPrev = data && data.previous ? this.requestUrl.bind(this, data.previous) : null;
        const fetchNext = data && data.next ? this.requestUrl.bind(this, data.next) : null;
        
        return (
            <div className="app">
                <header>
                    <h1>Star Ships</h1>
                    <h2>of the Star Wars Universe</h2>
                </header>

                <section className="content">
                    {status === STATES.PENDING && (
                        <p>Loading...</p>
                    )}

                    {status === STATES.REJECTED && (
                        <p>Something went wrong.</p>
                    )}
                    
                    {status === STATES.FULFILLED && (
                        <Ships starships={data.results} fetchPrev={fetchPrev} fetchNext={fetchNext} />
                    )}
                </section>

            </div>
        );
    }

}
