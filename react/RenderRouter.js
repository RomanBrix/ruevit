import React, {Component} from 'react';

export default class RenderRouter extends Component {
    render(){
        return(
            <div className="RenderRouter">
                    {this.props.children}
            </div>
        )
    }
}
