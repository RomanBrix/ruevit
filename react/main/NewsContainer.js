import React, {Component} from 'react';

export default class NewsContainer extends Component {
    render() {
        const { news,history } = this.props;

        //template for description
        const bigDesc = news.desc.split('@%&%@');
        const fullDesc = bigDesc.map((item, index)=>{
            return(
                <p key={index}>
                    {item}
                </p>)
        });

        return (
            <div className={`news-card`} onClick={()=>{
                history.push(`/news/${news.id}`)
            }}>
                <div className="date">{news.date}</div>
                <h3>{news.title}</h3>
                <div className="desc">
                    {fullDesc}
                </div>
            </div>
        )
    }
}