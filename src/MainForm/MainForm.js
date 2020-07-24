import React, { Component } from 'react'
import Features from '../Features/Features'

export class MainForm extends Component {
    render() {
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {/* {features} */}
            {/* <Features features={this.props.features}/> */}
          </form>
        )
    }
}

export default MainForm
