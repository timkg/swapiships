import React, { Component } from "react";
import Ships from "./ships";
import Loading from "./loading";
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
            leavingState: null,
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
                    leavingState: this.state.status,
                    status: STATES.FULFILLED,
                    data: response
                })

                setTimeout(() => {
                    this.setState({
                        leavingState: null
                    })
                }, 1000)
            })
            .catch(reason => {
                this.setState({
                    leavingState: this.state.status,
                    status: STATES.REJECTED,
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
                    leavingState: this.state.status,
                    status: STATES.FULFILLED,
                    data: response
                })
            })
            .catch(reason => {
                this.setState({
                    leavingState: this.state.status,
                    status: STATES.REJECTED,
                })
            })
    }

    render() {
        const { status, leavingState, data } = this.state;
        const fetchPrev = data && data.previous ? this.requestUrl.bind(this, data.previous) : null;
        const fetchNext = data && data.next ? this.requestUrl.bind(this, data.next) : null;
        
        return (
            <div className="app">
                <header>
                    <h1>Star Ships from <img src="/logowhite.svg" alt="Star Wars Logo"/></h1>
                    
                </header>

                <section className="content">

                    {((status === STATES.PENDING) || (leavingState === STATES.PENDING)) && (
                        <Loading isTransitioningOut={leavingState === STATES.PENDING}/>
                    )}

                    {status === STATES.FULFILLED && (
                        <Ships starships={data.results} fetchPrev={fetchPrev} fetchNext={fetchNext} />
                    )}

                    {status === STATES.REJECTED && (
                        <p>Something went wrong.</p>
                    )}
                    
                    
                </section>

            </div>
        );
    }

}

