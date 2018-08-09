import React, {Component} from 'react';

export default class AdvV3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            advs: props.advs,
            activeAdvs:0
        };
    }

    render() {
        const { advs } = this.state;
        const { history } = this.props;

        const advsContainter = advs.map((item, index)=>{
            let count = '0';
            if(index + 1 < 10){
                count = `0${index + 1}`;
            }
            return(
                <div
                    className={`adv-card-v3`}
                    key={index}
                    style={{backgroundImage : `url(/src/advs/${item.img})`}}
                    onClick={()=>{
                        history.push(`/adv/${index}`)
                    }}
                >
                    <div className="count">{count}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            )
        });
        return (
            <div className="adv" id={'adv-v3'}>
                <div className="adv-intro">
                    <h2 className={`with-left-stroke`}>Наши преимущества перед другими</h2>
                </div>
                <div className="adv-container">
                    <div className="top">
                        {advsContainter.slice(0,4)}
                    </div>
                    <div className="bottom">
                        {advsContainter.slice(4,8)}
                    </div>
                </div>
            </div>
        )
    }
}