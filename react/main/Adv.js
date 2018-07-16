import React, {Component} from 'react';
import $ from "jquery";

export default class Adv extends Component {
    constructor(props){
        super(props);
        this.state = {
            advs: props.advs,
            activeAdvs:0
        };
    }

    nextBtn(){
        const { advs, activeAdvs } = this.state;
        const allServ = $('.adv-card');
        const widthOfCard = $(allServ[activeAdvs]).outerWidth(true);
        const screenWidth = getComputedStyle($('.adv-container')[0]).width.slice(0, -2);
        const maxNext = allServ.length - (Math.floor(screenWidth/widthOfCard));
        // console.log(screenWidth);
        // console.log(maxNext);


        if (activeAdvs < advs.length - 1 && maxNext > activeAdvs) {
            const firstCard =$(allServ[0])[0].style.marginLeft.slice(1,-2);

            let  marl = 0;
            if(activeAdvs === 0){
                marl =   -widthOfCard
            }else{
                marl =  -firstCard - widthOfCard
            }

            $(allServ[0]).css({
                marginLeft: `${marl}px`
            });
            this.setState({
                activeAdvs: activeAdvs + 1
            })
        }

        if(maxNext <= activeAdvs){
            // alert('last');
            $('.adv-setting').toggleClass('shake-element');
            setTimeout(()=>{
                $('.adv-setting').toggleClass('shake-element');
            },500);
        }
    }

    prevBtn(){
        const { advs, activeAdvs } = this.state;
        const allServ = $('.adv-card');
        const widthOfCard = $(allServ[activeAdvs]).outerWidth(true);
        const firstCard = $(allServ[0])[0].style.marginLeft.slice(1,-2);

        let  marl = 0;
        if(activeAdvs === 0){
            marl =   -widthOfCard
        }else{
            marl =  -firstCard + widthOfCard
        }
        // console.log(marl);


        if (activeAdvs > 0) {

            $(allServ[0]).css({
                marginLeft: `${marl}px`
            });
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
                    <i className="icon-left-open-big"  onClick={()=>{
                        this.prevBtn();
                    }}/>
                    <i className="icon-right-open-big" id={`we_need_to_stop`} onClick={()=>{
                        this.nextBtn();
                    }}/>
                </div>
            </div>
        )
    }
}