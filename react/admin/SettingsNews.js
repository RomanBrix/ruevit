import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';

export default class SettingsNews extends Component {
    render() {
        // console.log(this.props);
        const { news, addNews, deleteNews, getNews } = this.props;
        const newsContainer = news.map((item)=>{
            return <div className={`news-preview`} key={item.id}>
                <div className="custom-settings">
                    <div className="btn-delete" onClick={()=>{
                        deleteNews('delete_news', item.id, (react, stringResp)=>{
                                if(react){
                                    alert('Новость удаленна!');
                                    getNews('get_news');
                                }else{
                                    alert(stringResp)
                                }
                            });
                    }}>Удалить</div>
                    <div className="btn-change" onClick={()=>{
                        this.props.history.push(`/admin/settings-news/${item.id}`)
                    }}>Изменить</div>
                </div>
                <div className="date">{item.date}</div>
                <h3>{item.title}</h3>
                <div className="desc">
                    {item.desc_r}
                </div>
            </div>
        });

        return (
            <div className="settings-news">
                {/*News*/}
                <div className="news-container">
                    <div className="btn-add" onClick={()=>{
                        const name = prompt('Название новости');
                        if(name !== null) {
                            addNews('add_news', name, (react, stringResp)=>{
                                if(react){
                                    alert('Новость добавлена, отредактируйте ее как нужно');
                                    getNews('get_news');
                                }else{
                                    alert(stringResp)
                                }
                            });
                        }
                    }}>Добавить новость</div>
                    {newsContainer}
                </div>
            </div>
        )
    }
}