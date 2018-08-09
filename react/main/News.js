import React, {Component} from 'react';
import NewsContainer from "./NewsContainer";

export default class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: props.news
        };
    }
    componentWillReceiveProps(newProps){
        this.setState({
            news: newProps.news
        })
    }
    render() {
        const { history } = this.props;
        const { news } = this.state;

        const newsContainer = news.slice(0,3).map((item)=>{
            return (
                <NewsContainer key={item.id} news={item} history={history}/>
            )
        });
        return (
            <div className="news" id={`news`}>
                <div className="news-head">
                    <h2 className={`with-left-stroke`}>Последние новости</h2>
                    <span onClick={()=>{
                        history.push('/news');
                    }}>Все новости</span>
                </div>
                <div className="news-container">
                    {newsContainer}
                </div>
            </div>
        )
    }
}