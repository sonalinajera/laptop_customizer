import React, { Component } from 'react'
import FEATURES from './Features'
import FeatureOptions from '../FeatureOptions/FeatureOptions';
import './Features.css'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export class FeaturesList extends Component {
    render() {
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = FEATURES[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (

                    <FeatureOptions key={itemHash}
                        id={itemHash}
                        itemHash={itemHash}
                        selected={this.props.selected}
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

export default FeaturesList
