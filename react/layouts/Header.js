import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../src/logo.png';
import $ from "jquery";

export default class Header extends Component {
    scrollTo(id){
            $('html, body').animate({
                scrollTop: ($(`#${id}`).offset().top)
            },900);
    }
    render() {
        const { contacts } = this.props;
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="menu">
                    <ul>
                        <li className={'active'} onClick={()=>{
                            this.scrollTo('intro')
                        }}> Главная </li>

                        <li onClick={()=>{
                            this.scrollTo('adv')
                        }}>О нас</li>

                        <li onClick={()=>{
                            this.scrollTo('service')
                        }}>Услуги</li>

                        <li onClick={()=>{
                            this.scrollTo('gallery')
                        }}>Галерея</li>

                        <li onClick={()=>{
                            // this.scrollTo('intro')
                        }}>Новости</li>

                        <li onClick={()=>{
                            this.scrollTo('contact')
                        }}>Контакты</li>

                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        <li className={'inst'} onClick={()=>{
                            window.open(`${contacts.insta}`);
                        }}><i className={'icon-instagram'}/></li>

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