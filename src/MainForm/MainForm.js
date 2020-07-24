import React, { Component } from 'react'
import Features from '../Features/Features'
import './MainForm.css'

export class MainForm extends Component {
    render() {
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features state={this.props.state} 
            features={this.props.features} 
            onChange={this.props.onChange} />
          </form>
        )
    }
}

export default MainForm
