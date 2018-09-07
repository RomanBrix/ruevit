import React, {Component} from 'react';
import ArticleDraft from "./ArticleDraft";
import lang_ua from '../../src/ua.svg';
import lang_rus from '../../src/rus.svg';
import lang_eng from '../../src/eng.svg';
// import {Redirect} from 'react-router-dom';

export default class ArticleAdvServ extends Component {
    constructor(props){
        super(props);
        this.state = {
            contentToSave : '',
            changeContent: 'rus',
            titleChange : ''
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
        const { changeContent } = this.state;
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
        let ourLangContent = '';
        let ourLangTitle = '';

        switch (changeContent){
            case 'rus':
                ourLangContent = ourContent.content;
                ourLangTitle = ourContent.title;
                break;
            case 'ua':
                ourLangContent = ourContent.contentUa;
                ourLangTitle = ourContent.titleUa;

                break;

            case 'eng':
                ourLangContent = ourContent.contentEng;
                ourLangTitle = ourContent.titleEng;

                break;

        }
        // let langContent = {};

        // switch (changeContent){
        //     case 'rus':
        //         langContent = <div className="content">
        //             <input id={`news-title`} type="text" defaultValue={ourContent.title} ref={`newsTitle`}/>
        //             <h2>Сожержание:</h2>
        //             <ArticleDraft
        //                 content={ourContent.content}
        //                 getContentToSave={this.getContentToSave.bind(this)}
        //             />
        //
        //             <div className="all-save" onClick={()=>{
        //                 const { contentToSave } = this.state;// big text
        //                 const {newsTitle} = this.refs; //etc
        //                 let lastContent = contentToSave;
        //                 if(contentToSave.length < 10){
        //                     lastContent = ourContent.content;
        //                 }
        //                 // console.log(contentToSave);
        //                 changeAdvServ(trueType,match.params.id, newsTitle.value, lastContent, (react)=>{
        //                     if(react){
        //                         alert('Сохраненно');
        //                         getAdvServ('get_adv_serv');
        //                         history.push('/admin/settings-adv-serv');
        //                     }
        //                 });
        //             }}>Сохранить изминения</div>
        //         </div>;
        //             break;
        //     case 'ua':
        //         langContent = <div className="content">
        //             <input id={`news-title`} type="text" defaultValue={ourContent.titleUa} ref={`newsTitle`}/>
        //             <h2>Сожержание:</h2>
        //             <ArticleDraft
        //                 content={ourContent.contentUa}
        //                 getContentToSave={this.getContentToSave.bind(this)}
        //             />
        //
        //             <div className="all-save" onClick={()=>{
        //                 const { contentToSave } = this.state;// big text
        //                 const {newsTitle} = this.refs; //etc
        //                 let lastContent = contentToSave;
        //                 if(contentToSave.length < 10){
        //                     lastContent = ourContent.content;
        //                 }
        //                 // console.log(contentToSave);
        //                 changeAdvServ(trueType,match.params.id, newsTitle.value, lastContent, (react)=>{
        //                     if(react){
        //                         alert('Сохраненно');
        //                         getAdvServ('get_adv_serv');
        //                         history.push('/admin/settings-adv-serv');
        //                     }
        //                 });
        //             }}>Сохранить изминения</div>
        //         </div>;
        //             break;
        //
        //     case 'eng':
        //         langContent = <div className="content">
        //             <input id={`news-title`} type="text" defaultValue={ourContent.titleEng} ref={`newsTitle`}/>
        //             <h2>Сожержание:</h2>
        //             <ArticleDraft
        //                 content={ourContent.contentEng}
        //                 getContentToSave={this.getContentToSave.bind(this)}
        //             />
        //
        //             <div className="all-save" onClick={()=>{
        //                 const { contentToSave } = this.state;// big text
        //                 const {newsTitle} = this.refs; //etc
        //                 let lastContent = contentToSave;
        //                 if(contentToSave.length < 10){
        //                     lastContent = ourContent.content;
        //                 }
        //                 // console.log(contentToSave);
        //                 changeAdvServ(trueType,match.params.id, newsTitle.value, lastContent, (react)=>{
        //                     if(react){
        //                         alert('Сохраненно');
        //                         getAdvServ('get_adv_serv');
        //                         history.push('/admin/settings-adv-serv');
        //                     }
        //                 });
        //             }}>Сохранить изминения</div>
        //         </div>;
        //             break;
        // }

        // console.log(ourContent);
        // console.log(langContent);
        // console.log(changeContent);
        return (
            <div className="settings-news">
                {/*News*/}
                <div className="news-container">
                    <div className="change-lang">
                        <ul>
                            <li onClick={({target})=>{
                                const {contentToSave} = this.state;
                                console.log(contentToSave);
                                if ( contentToSave.length === 0 ) {
                                    this.setState({
                                        changeContent: 'rus'
                                    });
                                    this.refs.newsTitle.value = ourContent.title;
                                    const activeLang = document.getElementsByClassName('active-lang')[0];
                                    const ourElem = target;
                                    // console.log(activeLang);
                                    // console.log(ourElem);
                                    activeLang.classList.remove('active-lang');
                                    ourElem.classList.add('active-lang');

                                }else{
                                    const check = confirm('Поменять язык? все не сохраненные данные будут утеряны!');

                                    if(check){
                                        this.setState({
                                            changeContent: 'rus',
                                            contentToSave: ''
                                        });
                                        this.refs.newsTitle.value = ourContent.title;
                                        const activeLang = document.getElementsByClassName('active-lang')[0];
                                        const ourElem = target;
                                        // console.log(activeLang);
                                        // console.log(ourElem);
                                        activeLang.classList.remove('active-lang');
                                        ourElem.classList.add('active-lang');
                                    }
                                }

                            }}>
                                <img src={lang_rus} className={`active-lang`} alt=""/>
                            </li>
                            <li onClick={({target})=>{
                                const {contentToSave} = this.state;
                                console.log(contentToSave);
                                if ( contentToSave.length === 0 ) {
                                    this.setState({
                                        changeContent: 'ua'
                                    });
                                    this.refs.newsTitle.value = ourContent.titleUa;
                                    const activeLang = document.getElementsByClassName('active-lang')[0];
                                    const ourElem = target;
                                    // console.log(activeLang);
                                    // console.log(ourElem);
                                    activeLang.classList.remove('active-lang');
                                    ourElem.classList.add('active-lang');
                                }else{
                                    const check = confirm('Поменять язык? все не сохраненные данные будут утеряны!');

                                    if(check){
                                        this.setState({
                                            changeContent: 'ua',
                                            contentToSave: ''
                                        });
                                        this.refs.newsTitle.value = ourContent.titleUa;
                                        const activeLang = document.getElementsByClassName('active-lang')[0];
                                        const ourElem = target;
                                        // console.log(activeLang);
                                        // console.log(ourElem);
                                        activeLang.classList.remove('active-lang');
                                        ourElem.classList.add('active-lang');
                                    }
                                }
                            }}>

                                <img src={lang_ua} alt=""/>
                            </li>
                            <li onClick={({target})=>{
                                const {contentToSave} = this.state;
                                console.log(contentToSave);
                                if ( contentToSave.length === 0 ) {
                                    this.setState({
                                        changeContent: 'eng'
                                    });
                                    this.refs.newsTitle.value = ourContent.titleEng;
                                    const activeLang = document.getElementsByClassName('active-lang')[0];
                                    const ourElem = target;
                                    // console.log(activeLang);
                                    // console.log(ourElem);
                                    activeLang.classList.remove('active-lang');
                                    ourElem.classList.add('active-lang');
                                }else{
                                    const check = confirm('Поменять язык? все не сохраненные данные будут утеряны!');

                                    if(check){
                                        this.setState({
                                            changeContent: 'eng',
                                            contentToSave: ''
                                        });
                                        this.refs.newsTitle.value = ourContent.titleEng;
                                        const activeLang = document.getElementsByClassName('active-lang')[0];
                                        const ourElem = target;
                                        // console.log(activeLang);
                                        // console.log(ourElem);
                                        activeLang.classList.remove('active-lang');
                                        ourElem.classList.add('active-lang');
                                    }
                                }
                            }}>
                                <img src={lang_eng} alt=""/>

                            </li>
                        </ul>
                    </div>



                    <div className="content">
                        <input id={`news-title`} type="text" defaultValue={ourLangTitle} ref={`newsTitle`}/>
                        <h2>Сожержание:</h2>
                        <ArticleDraft
                            content={ourLangContent}
                            changeContent={changeContent}
                            getContentToSave={this.getContentToSave.bind(this)}
                        />

                        <div className="all-save" onClick={()=>{
                            const { contentToSave } = this.state;// big text
                            const {newsTitle} = this.refs; //etc
                            let lastContent = contentToSave;
                            if(contentToSave.length < 10){
                                lastContent = ourLangContent;
                            }
                            // console.log('changeContent: ', changeContent);
                            // console.log('newsTitle.value: ', newsTitle.value);
                            // console.log(lastContent);

                            changeAdvServ(trueType, changeContent, match.params.id, newsTitle.value, lastContent, (react)=>{
                                if(react){
                                    alert('Сохраненно');
                                    getAdvServ('get_adv_serv');
                                    setTimeout(()=>{
                                        history.push('/admin/settings-adv-serv');
                                    },200);
                                }
                            });
                        }}>Сохранить изминения</div>

                    </div>
                </div>
            </div>
        );





    }
}