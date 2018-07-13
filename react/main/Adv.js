import React, {Component} from 'react';
import $ from "jquery";

export default class Adv extends Component {
    constructor(props){
        super(props);
        this.state = {
            advs: props.advs,
            activeAdvs:0
        }
    }

    nextBtn(){
        const { advs, activeAdvs } = this.state;
        const allServ = $('.adv-card');
        console.log(allServ);

        if (activeAdvs < advs.length - 1) {
            const widthOfCard = $(allServ[activeAdvs]).outerWidth(true);

            // $(allServ[activeAdvs]).animate({
            //     marginLeft: `-${widthOfCard}px`
            // }, 'fast');
            $(allServ[activeAdvs]).css({
                marginLeft: `-${widthOfCard}px`
            });
            // $('#bigImg').css("background-image", `url(/src/advs/${srvs[activeAdvs + 1].img})`)
            this.setState({
                activeAdvs: activeAdvs + 1
            })
        }
    }

    prevBtn(){
        const { advs, activeAdvs } = this.state;
        const allServ = $('.adv-card');

        if (activeAdvs > 0) {
            // const widthOfCard = $(allServ[activeAdvs]).outerWidth(true);

            // $(allServ[activeAdvs - 1]).animate({
            //     marginLeft: `0px`
            // }, 'fast', 'linear');
            $(allServ[activeAdvs - 1]).css({
                marginLeft: `0px`
            });
            // $('#bigImg').css("background-image", `url(/src/services/${srvs[activeAdvs - 1].img})`)
            this.setState({
                activeAdvs: activeAdvs - 1
            })
        }
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
                    className={`adv-card`}
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
            <div className="adv" id={'adv'}>
                <div className="adv-intro">
                    <h2 className={`with-left-stroke`}>Наши преимущества перед другими</h2>
                </div>
                <div className="adv-container">
                    {advsContainter}
                </div>
                <div className="adv-setting">
                    <i className="icon-left-open-big" onClick={()=>{
                        this.prevBtn();
                    }}/>
                    <i className="icon-right-open-big" onClick={()=>{
                        this.nextBtn();
                    }}/>
                </div>
            </div>
        )
    }
}