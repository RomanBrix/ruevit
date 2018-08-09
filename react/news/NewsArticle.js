import React, {Component} from 'react';
import ReadableDraftJs from "../layouts/ReadableDraftJs";

export default class NewsArticle extends Component {
    render() {
        const { match, news, history } = this.props;
        console.log(this.props);

        let ourNews = {};
        for (let i = 0; i < news.length; i++){
            if(+news[i].id === +match.params.id){
                ourNews = news[i];
                break;
            }
        }
        return (
            <div className="big-news">
                <div className="serv-header">
                    <h1>{ourNews.title}</h1>
                    <i className='icon-angle-circled-left' onClick={()=>{ history.push('/news')}}/>
                </div>
                <div className="news-container-article">
                    <ReadableDraftJs content={ourNews.content}/>
                </div>
            </div>
        )
    }
}