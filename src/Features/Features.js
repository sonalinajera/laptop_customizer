import React, { Component } from 'react'
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import './Features.css'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (

                    <FeatureOptions key={itemHash}
                        id={itemHash}
                        itemHash={itemHash}
                        state={this.props.state}
                        features={this.props.features}
                        feature={feature}
                        item={item}
                        onChange={this.props.onChange} />
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
