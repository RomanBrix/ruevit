import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../css/scss/layouts/gHeader.scss';

export default class Header extends Component {
    render() {
        console.log(this.props);
        const { contacts } = this.props;
        return (
            <div className="gHeader">
                {/*<div className="logo">*/}
                    {/*<img src={logo} alt=""/>*/}
                {/*</div>*/}
                <div className="menu">
                    <ul>
                        <li> <NavLink to="/">Главная</NavLink></li>
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