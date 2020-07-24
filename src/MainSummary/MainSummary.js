import React, { Component } from 'react'
import SummaryCart from '../SummaryCart/SummaryCart'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import './MainSummary.css'

export class MainSummary extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryCart selected={this.props.selected}/>
                <SummaryTotal selected={this.props.selected}/>
            </section>
        )
    }
}

export default MainSummary
