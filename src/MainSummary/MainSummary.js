import React, { Component } from 'react'

export class MainSummary extends Component {
    render() {
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {/* {summary} */}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {/* {USCurrencyFormat.format(total)} */}
              </div>
            </div>
          </section>
        )
    }
}

export default MainSummary
