import React, {Component} from 'react';

export default class About extends Component {
    render() {
        const { history, translate} = this.props;
        const cont = translate.container;
        return (
            <div className="about">
                {/*<h1>В разработке</h1>*/}
                <div className="about-header">
                    <h1>{translate.head}</h1>
                    <i className='icon-cancel' onClick={()=>{ history.push('/')}}/>
                </div>
                <div className="about-container">
                    <h2>{cont.head}</h2>
                    <p>{cont.afterHead}</p>

                    <h3>{cont.h3}</h3>
                    <ul>
                        <li onClick={()=>{ history.push('/service/1')}}>{cont.firstUl[0]}</li>
                        <li onClick={()=>{ history.push('/service/2')}}>{cont.firstUl[1]}</li>
                        <li onClick={()=>{ history.push('/service/3')}}>{cont.firstUl[2]}</li>
                        {/*<li onClick={()=>{ history.push('/service/4')}}>Юридический департамент</li>*/}
                        <li onClick={()=>{ history.push('/service/5')}}>{cont.firstUl[3]}</li>
                        <li onClick={()=>{ history.push('/service/6')}}>{cont.firstUl[4]}</li>
                    </ul>

                    <h3>{cont.h3_2}</h3>
                    <ul>
                        <li>{cont.secUl[0]}</li>
                        <li>{cont.secUl[1]}</li>
                        <li>{cont.secUl[2]}</li>
                        <li>{cont.secUl[3]}</li>
                        <li>{cont.secUl[4]}</li>
                        <li>{cont.secUl[5]}</li>
                        <li>{cont.secUl[6]}</li>
                    </ul>
                    <p>{cont.textAfterUl}</p>
                    <h3>{cont.h3_3}</h3>
                    <ul>
                        <li>{cont.thirdUl[0]}</li>
                        <li>{cont.thirdUl[1]}</li>
                        <li>{cont.thirdUl[2]}</li>
                        <li>{cont.thirdUl[3]}</li>
                        <li>{cont.thirdUl[4]}</li>
                        <li>{cont.thirdUl[5]}</li>
                        <li>{cont.thirdUl[6]}</li>
                        <li>{cont.thirdUl[7]}</li>
                        <li>{cont.thirdUl[8]}</li>
                        <li>{cont.thirdUl[9]}</li>
                        <li>{cont.thirdUl[10]}</li>
                        <li>{cont.thirdUl[11]}</li>
                        <li>{cont.thirdUl[12]}</li>
                        <li>{cont.thirdUl[13]}</li>
                        <li>{cont.thirdUl[14]}</li>
                    </ul>
                    <p>{cont.textAfterThirdUl}</p>
                    <p><b>{cont.oneMore}</b></p>
                </div>
            </div>
        )
    }
}