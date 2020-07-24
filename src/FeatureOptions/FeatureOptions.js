import React, { Component } from 'react'
import './FeatureOptions.css'
import slugify from 'slugify';

//converts numbers to US currency :D 
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export class FeatureOptions extends Component {


    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selected.selected[this.props.feature].name}
                    onChange={() => this.props.onChange(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        )
    }
}

export default FeatureOptions
