import React, {Component} from 'react';
import ArticleDraft from "./ArticleDraft";
// import {Redirect} from 'react-router-dom';

export default class ArticleAdvServ extends Component {
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
        const { adv, serv, match, getAdvServ, changeAdvServ, history } = this.props;
        let ourContent = {};
        let trueType = '';
        if(match.params.type === 'adv'){
            for (let i = 0; i < adv.length; i++){
                if(+adv[i].id === +match.params.id){
                    ourContent = adv[i];
                    break;
                }
            }
            trueType = 'change_adv'
        }else if(match.params.type === 'serv'){
            for (let i = 0; i < serv.length; i++){
                if(+serv[i].id === +match.params.id){
                    ourContent = serv[i];
                    break;
                }
            }
            trueType = 'change_serv';
        }else{

        }

        return (
            <div className="settings-news">
                {/*News*/}
                <div className="news-container">
                    {/*{newsContainer}*/}
                    <div className="content">
                        <input id={`news-title`} type="text" defaultValue={ourContent.title} ref={`newsTitle`}/>
                        <h2>Сожержание:</h2>
                        <ArticleDraft
                            content={ourContent.content}
                            getContentToSave={this.getContentToSave.bind(this)}
                        />

                        <div className="all-save" onClick={()=>{
                            const { contentToSave } = this.state;// big text
                            const {newsTitle} = this.refs; //etc
                            let lastContent = contentToSave;
                            if(contentToSave.length < 10){
                                lastContent = ourContent.content;
                            }
                            // console.log(contentToSave);
                            changeAdvServ(trueType,match.params.id, newsTitle.value, lastContent, (react)=>{
                                if(react){
                                    alert('Сохраненно');
                                     getAdvServ('get_adv_serv');
                                     history.push('/admin/settings-adv-serv');
                                }
                            });
                        }}>Сохранить изминения</div>
                    </div>
                </div>
            </div>
        )
    }
}