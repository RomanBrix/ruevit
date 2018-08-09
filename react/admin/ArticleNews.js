import React, {Component} from 'react';
import ArticleDraft from "./ArticleDraft";
// import {Redirect} from 'react-router-dom';

export default class ArticleNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentToSave : ''
        }
    }

    getContentToSave(contentToSave){

        this.setState({
            contentToSave
        })
    }
    render() {
        // console.log(this.props);
        const { news, match,changeNews, getNews, history } = this.props;
        let ourNews = {};
        for (let i = 0; i < news.length; i++){
            if(+news[i].id === +match.params.id){
                ourNews = news[i];
                break;
            }
        }
        return (
            <div className="settings-news">
                {/*News*/}
                <div className="news-container">
                    {/*{newsContainer}*/}
                    <div className="content">
                        <input id={`news-title`} type="text" defaultValue={ourNews.title} ref={`newsTitle`}/>
                        <input id={`news-date`} type="text" defaultValue={ourNews.date} ref={`newsDate`}/>
                        <h2>Краткое описание:</h2>
                        <textarea id={`news-desc`} defaultValue={ourNews.desc_r} ref={`newsDesc`}/>
                        <h2>Полное описание:</h2>

                        <ArticleDraft
                            content={ourNews.content}
                            getContentToSave={this.getContentToSave.bind(this)}
                        />

                        <div className="all-save" onClick={()=>{
                            const { contentToSave } = this.state;// big text
                            const {newsTitle, newsDate, newsDesc} = this.refs; //etc
                            let lastContent = contentToSave;
                            if(contentToSave.length < 10){
                                lastContent = ourNews.content;
                            }
                            // console.log(contentToSave);
                            changeNews('change_news',match.params.id, newsTitle.value, newsDate.value, newsDesc.value, lastContent, (react)=>{
                                if(react){
                                    alert('Сохраненно');
                                    getNews('get_news');
                                    history.push('/admin/settings-news')
                                }
                            });
                        }}>Сохранить изминения</div>
                    </div>
                </div>
            </div>
        )
    }
}