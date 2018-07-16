import React, {Component} from 'react';

export default class NewsArticle extends Component {
    render() {
        const { match } = this.props;
        console.log(this.props);
        return (
            <div className="">
                <h1>
                   ID is : {match.params.id}
                </h1>
            </div>
        )
    }
}