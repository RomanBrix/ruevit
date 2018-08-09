import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import { NavLink} from 'react-router-dom';

export default class Admin extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        // console.log(auth);

    }
    render() {
        // const { history } = this.props;
        return (
            <div className="settings-header">
                <ul>

                    <li>
                        <NavLink exact to={`/admin/settings-news`} >Новости</NavLink>
                    </li>
                    <li> <NavLink exact to={`/admin/settings-gallery`} >Галерея</NavLink></li>
                    <li>
                        <NavLink exact to={`/admin/settings-adv-serv`} >Услуги И Приемущества</NavLink>
                    </li>
                    <li> <NavLink exact to={`/admin/settings-slider`} >Слайдер</NavLink></li>
                    <li> <NavLink exact to={`/admin`} >Профиль</NavLink></li>
                </ul>
            </div>
        )
    }
}