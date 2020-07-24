import React, { Component } from 'react'
import './SummaryTotal.css'

//converts number to US dollarz
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export class SummaryTotal extends Component {
    render() {
         const total = Object.keys(this.props.selected.selected).reduce(
            (acc, curr) => acc + this.props.selected.selected[curr].cost,
            0
        );
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        )
    }
}

export default SummaryTotal
