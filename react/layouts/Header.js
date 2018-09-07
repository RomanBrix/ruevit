import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../src/logo.svg';
import logo_eng from '../../src/logo.svg';
import logo_ua from '../../src/logo.svg';
import lang_ua from '../../src/ua.svg';
import lang_rus from '../../src/rus.svg';
import lang_eng from '../../src/eng.svg';


import $ from "jquery";

export default class Header extends Component {
    scrollTo(id){
        let time = 900;
        if(id==="adv"){
            time = 600;
        }
        // console.log(id);
        $('html, body').animate({
            scrollTop: ($(`#${id}`).offset().top)
        }, time);
    }
    render() {
        const { contacts, history, langFunc, lang, translate } = this.props;
        let activeLang = <span>
                    Язык: <img src={lang_rus} alt=""/>
                </span>;;

        const headerTranslate = translate.mainPage.header;
        switch (lang){
            case 'rus':
                activeLang = <span>
                    Язык: <img src={lang_rus} alt=""/>
                </span>;
                break;

            case 'ua':
                activeLang = <span>
                    Мова: <img src={lang_ua} alt=""/>
                </span>;
                break;

            case 'eng':
                activeLang = <span>
                    Language: <img src={lang_eng} alt=""/>
                </span>;
                break;
        }
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu">
                    <ul>
                        {/*<li className={'active'} onClick={()=>{*/}
                            {/*this.scrollTo('intro')*/}
                        {/*}}> Главная </li>*/}

                        <li onClick={()=>{
                            // this.scrollTo('adv')
                            history.push('/about');
                        }}>
                            {headerTranslate.about}
                        </li>

                        <li onClick={()=>{
                            this.scrollTo('service')
                        }}>
                            {headerTranslate.service}
                        </li>

                        <li onClick={()=>{
                            this.scrollTo('gallery')
                        }}>
                            {headerTranslate.gallery}
                        </li>

                        {/*<li onClick={()=>{*/}
                            {/*this.scrollTo('news')*/}
                        {/*}}>Новости</li>*/}

                        <li onClick={()=>{
                            this.scrollTo('contact')
                        }}>
                            {headerTranslate.contacts}
                        </li>

                    </ul>
                </div>
                <div className="socials">
                    <ul>
                       <li className='langList'>

                           {
                            activeLang
                           }
                        <ol className='lang'>
                            <li onClick={()=>{
                                langFunc('set', 'ua');
                            }}>
                                <img src={lang_ua} alt=""/>
                            </li>
                            <li onClick={()=>{
                                langFunc('set', 'rus');
                            }}>
                                <img src={lang_rus} alt=""/>
                            </li>
                            <li onClick={()=>{
                                langFunc('set', 'eng');
                                // langFunc('')
                            }}>
                                <img src={lang_eng} alt=""/>
                            </li>
                        </ol>
                       </li>
                        {/*<li className={'inst'} onClick={()=>{*/}
                            {/*window.open(`${contacts.insta}`);*/}
                        {/*}}><i className={'icon-instagram'}/></li>*/}

                        {/*<li className={'fb'} onClick={()=>{*/}
                            {/*window.open(`${contacts.fb}`);*/}
                        {/*}}><i className={'icon-facebook'}/></li>*/}

                        {/*<li className={'youtube'} onClick={()=>{*/}
                            {/*window.open(`${contacts.youtube}`);*/}
                        {/*}}><i className={'icon-youtube'}/></li>*/}

                    </ul>
                </div>
            </div>
        )
    }
}