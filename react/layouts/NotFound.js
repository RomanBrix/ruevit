import React, {Component} from 'react';
export default class NotFound extends Component {
    render() {
        console.log();
        return (
            <div className="not-found">
                <div className={`go-back`} onClick={()=>{
                    this.props.history.push('/');
                }}>Вернуться на главную</div>
                <div className={`not`}>4
                    <div className="img-n">
                        <img src="/src/rifle.svg" alt=""/>
                    </div>
                    4</div>
                <div className={`found`}>Not Found</div>
            </div>
        )
    }
}