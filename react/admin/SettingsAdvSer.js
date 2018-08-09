import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';

export default class SettingsNews extends Component {
    render() {
        // console.log(this.props);
        const { adv, serv, history } = this.props;
        const advContainer = adv.map((item)=>{
            if(+item.id === 1){
                return ;
            }
            return <div className="card" key={item.id} onClick={()=>{
                history.push(`/admin/settings-adv-serv/adv-${item.id}`)
            }}>
                    <h3>{item.id - 1}.{item.title}</h3>
            </div>
        });
        const servContainer = serv.map((item)=>{
            return <div className="card" key={item.id} onClick={()=>{
                history.push(`/admin/settings-adv-serv/serv-${item.id}`)
            }}>
                <h3>{item.id}.{item.title}</h3>
            </div>
        });

        return (
            <div className="settings-all">
                <div className="all-container">
                    <div className="adv-container">
                        <h2>Приемущества:</h2>
                        {advContainer}
                    </div>

                    <div className="serv-container">
                        <h2>Услуги:</h2>
                        {servContainer}
                    </div>
                </div>
            </div>
        )
    }
}