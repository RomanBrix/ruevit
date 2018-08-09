import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';

export default class Profile extends Component {
    render() {
        const { changePassword, addNewUser } = this.props;
        return (
            <div className="settings-profile">
                <div className="profile-container">
                    <h2>Поменять пароль</h2>
                    <div className="change-password">
                       <div className="group">
                            <label htmlFor="currentPassword">Текущий пароль</label>
                            <input type="password" id={`currentPassword`} ref={`currentPassword`}/>
                       </div>
                        <div className="group">
                            <label htmlFor="newPass">Новый пароль</label>
                            <input type="password" id={`newPass`} ref={`newPass`}/>
                        </div>
                        <div className="group">
                            <label htmlFor="newPassP">Новый пароль еще раз</label>
                            <input type="password" id={`newPassP`} ref={`newPassP`}/>
                        </div>
                        <div className="btn" onClick={()=>{
                            const { currentPassword, newPass, newPassP} = this.refs;
                            if(newPass.value === newPassP.value) {
                               changePassword('change_password', currentPassword.value, newPass.value, (chPass, ...rest)=>{
                                   if(chPass === true){
                                       alert('Пароль изменён!');
                                       currentPassword.value = '';
                                       newPass.value = '';
                                       newPassP.value = '';
                                   }else{
                                       // alert()
                                       alert(...rest);
                                   }
                               });
                            }else{
                                alert('Новые пароли не совпадают');
                            }

                        }}>Изменить Пароль</div>
                    </div>
                    <h2>Добавить пользователя</h2>
                    <div className="new-user">
                        <div className="group">
                            <label htmlFor="new-name">Логин</label>
                            <input type="text" id="new-name" ref={`uName`}/>
                        </div>
                        <div className="group">
                            <label htmlFor="newPassword">Пароль</label>
                            <input type="password" id={`newPassword`} ref={`uPass`}/>
                        </div>
                        <div className="group">
                            <label htmlFor="newPasswordP">Пароль еще раз</label>
                            <input type="password" id={`newPasswordP`} ref={`uPassP`}/>
                        </div>
                        <div className="btn" onClick={()=>{
                            const { uName, uPass, uPassP } = this.refs;
                            if(uPass.value === uPassP.value) {
                                addNewUser('add_user', uName.value, uPass.value, (chPass, ...rest)=>{
                                    if(chPass === true){
                                        alert('Пользователь добавлен!');
                                        uName.value = '';
                                        uPass.value = '';
                                        uPassP.value = '';
                                    }else{
                                        alert(...rest);
                                    }
                                });
                            }else{
                                alert('Пароли не совпадают');
                            }
                        }}>Добавить Пользователя</div>
                    </div>
                </div>
            </div>
        )
    }
}