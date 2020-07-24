import React, { Component } from 'react'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

//converts numbers to US currency :D 

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
              const featureHash = feature + '-' + idx;
              const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));

                console.log(this.props.state)
                return (
                  <div key={itemHash} className="feature__item">
                    <input
                      type="radio"
                      id={itemHash}
                      className="feature__option"
                      name={slugify(feature)}
                      checked={item.name === this.props.state.selected[feature].name}
                      onChange={e => this.props.onChange(feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                      {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                  </div>
                );
              });
        
              return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  {options}
                </fieldset>
              );
            });
           

        return (
           <div>
            {features}
            </div>
        )
    }
}

export default Features
