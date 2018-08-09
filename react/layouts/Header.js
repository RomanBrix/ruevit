import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../src/logo.svg';
import $ from "jquery";

export default class Header extends Component {
    scrollTo(id){
        let time = 900;
        if(id==="adv"){
            time = 600;
        }
        console.log(id);
        $('html, body').animate({
            scrollTop: ($(`#${id}`).offset().top)
        }, time);
    }
    render() {
        const { contacts, history } = this.props;

        // console.log(this.props);
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
                        }}>О нас</li>

                        <li onClick={()=>{
                            this.scrollTo('service')
                        }}>Услуги</li>

                        <li onClick={()=>{
                            this.scrollTo('gallery')
                        }}>Галерея</li>

                        <li onClick={()=>{
                            this.scrollTo('news')
                        }}>Новости</li>

                        <li onClick={()=>{
                            this.scrollTo('contact')
                        }}>Контакты</li>

                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        {/*<li className={'inst'} onClick={()=>{*/}
                            {/*window.open(`${contacts.insta}`);*/}
                        {/*}}><i className={'icon-instagram'}/></li>*/}

                        <li className={'fb'} onClick={()=>{
                            window.open(`${contacts.fb}`);
                        }}><i className={'icon-facebook'}/></li>

                        <li className={'youtube'} onClick={()=>{
                            window.open(`${contacts.youtube}`);
                        }}><i className={'icon-youtube'}/></li>

                    </ul>
                </div>
            </div>
        )
    }
}