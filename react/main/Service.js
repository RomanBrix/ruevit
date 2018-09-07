import React, {Component} from 'react';
import $ from "jquery";

export default class Service extends Component {

    constructor(props) {
        super(props);
        this.state = {
            srvs: props.services,
            activeServ: 0

        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            srvs: newProps.services
        })
    }
    componentDidMount(){
        // const { slide } = this.state;
        const need =$('.card')[0];

        $(need).addClass('card-active');
    }

    nextBtn(){
        const { srvs, activeServ } = this.state;
        const allServ = $('.card');

        const widthOfCard = $(allServ[activeServ]).outerWidth(true);
        const screenWidth = getComputedStyle($('.service-container')[0]).width.slice(0, -2);
        const maxNext = allServ.length - (Math.floor(screenWidth/widthOfCard));


        if (activeServ < srvs.length - 1 && maxNext > activeServ) {
            const widthOfCard = $(allServ[activeServ]).outerWidth(true);

            // $(allServ[activeServ]).animate({
            //     marginLeft: `-${widthOfCard}px`
            // }, 'fast');
            $(allServ[activeServ]).css({
                marginLeft: `-${widthOfCard}px`
            });
            $('#bigImg').css("background-image", `url(/src/services/${srvs[activeServ + 1].img})`)
            this.setState({
                activeServ: activeServ + 1
            })
        }

        if(maxNext <= activeServ){
            $('.service-setting').toggleClass('shake-element');
            setTimeout(()=>{
                $('.service-setting').toggleClass('shake-element');
            },500);
        }
    }

    prevBtn(){
        const { srvs, activeServ } = this.state;
        const allServ = $('.card');

        if (activeServ > 0) {
            // const widthOfCard = $(allServ[activeServ]).outerWidth(true);

            // $(allServ[activeServ - 1]).animate({
            //     marginLeft: `0px`
            // }, 'fast', 'linear');
            $(allServ[activeServ - 1]).css({
                marginLeft: `0px`
            });
            $('#bigImg').css("background-image", `url(/src/services/${srvs[activeServ - 1].img})`)
            this.setState({
                activeServ: activeServ - 1
            })
        }
    }

    onOver(index){
        const { srvs } = this.state;
        $('#bigImg').css("background-image", `url(/src/services/${srvs[index].img})`)
    }
    onLeave(){
        const { srvs, activeServ } = this.state;
        $('#bigImg').css("background-image", `url(/src/services/${srvs[activeServ].img})`)

    }

    render() {
        // /src/services/
        const { srvs } = this.state;
        const { history, lang, translate } = this.props;
        const servContainer = srvs.map((item, index)=>{
            switch (lang){
                case 'rus':
                    return (
                        <div
                            className={`card`}
                            style={{backgroundImage: `url(/src/services/${item.img})`}}
                            key={index}
                            onClick={()=>{
                                history.push(`/service/${item.id}`)
                            }}
                            onMouseEnter={()=>{
                                this.onOver(index);
                            }}
                            onMouseLeave={()=>{
                                // this.onLeave();
                            }}
                        >
                            <h3>{item.title}</h3>
                        </div>
                    );
                case 'ua':
                    return (
                        <div
                            className={`card`}
                            style={{backgroundImage: `url(/src/services/${item.img})`}}
                            key={index}
                            onClick={()=>{
                                history.push(`/service/${item.id}`)
                            }}
                            onMouseEnter={()=>{
                                this.onOver(index);
                            }}
                            onMouseLeave={()=>{
                                // this.onLeave();
                            }}
                        >
                            <h3>{item.titleUa}</h3>
                        </div>
                    );
                case 'eng':
                    return (
                        <div
                            className={`card`}
                            style={{backgroundImage: `url(/src/services/${item.img})`}}
                            key={index}
                            onClick={()=>{
                                history.push(`/service/${item.id}`)
                            }}
                            onMouseEnter={()=>{
                                this.onOver(index);
                            }}
                            onMouseLeave={()=>{
                                // this.onLeave();
                            }}
                        >
                            <h3>{item.titleEng}</h3>
                        </div>
                    );
                default:
                    return (
                        <div
                            className={`card`}
                            style={{backgroundImage: `url(/src/services/${item.img})`}}
                            key={index}
                            onClick={()=>{
                                history.push(`/service/${item.id}`)
                            }}
                            onMouseEnter={()=>{
                                this.onOver(index);
                            }}
                            onMouseLeave={()=>{
                                // this.onLeave();
                            }}
                        >
                            <h3>{item.title}</h3>
                        </div>
                    );
            }

        });
        return (
            <div className="service" id={`service`}>
                <div className="title">
                    <h2 className={`with-left-stroke`}>{translate.head}</h2>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, inventore nisi. Amet eligendi et modi quibusdam sequi? Accusamus at cupiditate delectus dolore eveniet, illo, molestias nemo quae quibusdam soluta vitae!</p>*/}
                </div>
                <div id="bigImg" style={{backgroundImage: `url(/src/services/${srvs[0].img})`}}/>
                <div className="service-container">
                    <div className="top">
                        {servContainer.slice(0,3)}
                    </div>
                    <div className="bottom">
                        {servContainer.slice(3,6)}

                    </div>
                </div>
                {/*<div className="service-setting">*/}
                    {/*<i className="icon-left-open-big" onClick={()=>{*/}
                        {/*this.prevBtn();*/}
                    {/*}}/>*/}
                    {/*<i className="icon-right-open-big" onClick={()=>{*/}
                        {/*this.nextBtn();*/}
                    {/*}}/>*/}
                {/*</div>*/}
            </div>
        )
    }
}