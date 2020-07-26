import React, { Component } from 'react'
import FeaturesList from '../Features/FeaturesList'
import './MainForm.css'
//corrected

export class MainForm extends Component {
    render() {
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeaturesList selected={this.props.selected} 
            onChange={this.props.onChange} />
          </form>
        )
    }
}

export default MainForm
