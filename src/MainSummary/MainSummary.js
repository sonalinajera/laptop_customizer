import React, { Component } from 'react'
import Summary from '../Summary/Summary'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export class MainSummary extends Component {
    render() {

      

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary state={this.props.state}/>
            </section>
        )
    }
}

export default MainSummary
