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

    componentDidMount(){
        // const { slide } = this.state;
        const need =$('.card')[0];

        $(need).addClass('card-active');
    }

    nextBtn(){
        const { srvs, activeServ } = this.state;
        const allServ = $('.card');

        if (activeServ < srvs.length - 1) {
            const widthOfCard = $(allServ[activeServ]).outerWidth(true);

            $(allServ[activeServ]).animate({
                marginLeft: `-${widthOfCard}px`
            }, 500);
            $('#bigImg').css("background-image", `url(/src/services/${srvs[activeServ + 1].img})`)
            this.setState({
                activeServ: activeServ + 1
            })
        }
    }

    prevBtn(){
        const { srvs, activeServ } = this.state;
        const allServ = $('.card');

        if (activeServ > 0) {
            // const widthOfCard = $(allServ[activeServ]).outerWidth(true);

            $(allServ[activeServ - 1]).animate({
                marginLeft: `0px`
            }, 500);
            $('#bigImg').css("background-image", `url(/src/services/${srvs[activeServ - 1].img})`)
            this.setState({
                activeServ: activeServ - 1
            })
        }
    }

    render() {
        // /src/services/
        const { srvs } = this.state;
        const { history } = this.props;
        const servContainer = srvs.map((item, index)=>{
            return (
                <div
                    className={`card`}
                    style={{backgroundImage: `url(/src/services/${item.img})`}}
                    key={index}
                    onClick={()=>{
                        history.push(`/service/${index}`)
                    }}
                >
                    <h3>{item.title}</h3>
                </div>
            )
        });
        return (
            <div className="service" id={`service`}>
                <div className="title">
                    <h2>Наши Услуги</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, inventore nisi. Amet eligendi et modi quibusdam sequi? Accusamus at cupiditate delectus dolore eveniet, illo, molestias nemo quae quibusdam soluta vitae!</p>
                </div>
                <div id="bigImg" style={{backgroundImage: `url(/src/services/${srvs[0].img})`}}/>
                <div className="service-container">
                    {servContainer}
                </div>
                <div className="service-setting">
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