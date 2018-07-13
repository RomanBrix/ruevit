import React, {Component} from 'react';
import GHeader from "../layouts/GHeader";

export default class Service extends Component {
    render() {
        const { frontRedux, history, match } = this.props;
        console.log(frontRedux);
        console.log(match);
        const position = match.params.position;
        const Serv = frontRedux.services[position];

        return (
            <div className="service">
                <GHeader/>
                <h1>{Serv.title}</h1>
                {/*Service*/}
            </div>
        )
    }
}