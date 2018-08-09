import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    render() {
        const { getLogin, frontRedux } = this.props;
        // console.log(`ZAPROS: ${frontRedux.request}`);
        // console.log(`AUTH: ${frontRedux.auth}`);
        if(frontRedux.request){
            console.log('LOADING');
        }
        if(frontRedux.auth){
            return <Redirect to={`/admin`}/>
        }
        return (
            <div className="admin-login">
                <div className="login-container">
                    <input type="text" id="login" placeholder={`Login`} ref={`log`}/>
                    <input type="password" id="password" placeholder={`Password`} ref={`pass`}/>
                    <div className="btn"  onClick={()=>{
                        const {log, pass} = this.refs;
                        getLogin('getLogin', log.value, pass.value);
                    }}>Войти</div>
                </div>
            </div>
        )
    }
}