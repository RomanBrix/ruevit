import React, {Component} from 'react';

export default class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="e-loadholder">
                    <div className="m-loader">
                        <span className="e-text">Loading</span>
                    </div>
                </div>
                <div id="particleCanvas-Blue"></div>
                <div id="particleCanvas-White"></div>
            </div>
        )
    }
}