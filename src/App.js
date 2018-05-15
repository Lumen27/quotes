import React, {Component} from 'react'
import axios from 'axios'
import {Quote} from "./quote"
import './App.css'
import {Button, Col, Row} from 'reactstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: ""
        };
        this.handleQuote = this.handleQuote.bind(this);


    }

    handleQuote() {
        axios.get(`https://talaikis.com/api/quotes/random/`).then(res => {
            let quoteMessage = res.data.quote;
            let authorMessage = res.data.author;
            this.setState({
                quote: quoteMessage,
                author: authorMessage
            })
        })
    }

    componentDidMount() {
        this.handleQuote()
    }

    render() {
        const twitterLink = "https://twitter.com/home/?status=";
        return (
            <div>
                <Row>
                    <Col className="header text-center">Simple Random Quotes</Col>
                </Row>
                <Row>
                    <Col sm={7} className="mainInfo text-center">
                        <div className="rQuote">
                            <Quote quote={this.state.quote} author={this.state.author}/>
                        </div>
                        <div className="buttons">
                            <Button color="primary" onClick={this.handleQuote}>
                                New Quote
                            </Button>
                            <Button
                                color="primary"
                                href={
                                    twitterLink + this.state.quote + " ― " + this.state.author
                                }
                                target="_blank"
                            >
                                Tweet this Quote
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App;













