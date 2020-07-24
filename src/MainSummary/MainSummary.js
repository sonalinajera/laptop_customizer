import React, { Component } from 'react'
import Summary from '../Summary/Summary'

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
