import React, {Component} from 'react';
import NewsContainer from "../main/NewsContainer";

export default class News extends Component {
    render() {
        const { news, history } = this.props;
        const newsContainer = news.map((item)=>{
            return (
                <NewsContainer key={item.id} news={item} history={history}/>
            )
        });
        return (
            <div className="big-news">
                <div className="serv-header">
                    <h1>Все новости</h1>
                    <i className='icon-cancel' onClick={()=>{ history.push('/')}}/>
                </div>
                <div className="news-container">
                    {newsContainer}
                </div>
            </div>
        )
    }
}