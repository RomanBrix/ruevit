import React, {Component} from 'react';
import $ from 'jquery';

export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgs:props.slider,
            slide: 1,
        }
    }
    componentDidMount(){
        // const { slide } = this.state;
        const need =$('.set')[0];

        $(need).addClass('set-active');
    }
    componentDidUpdate(){
        const { slide } = this.state;
        const need =$('.set')[slide-1];
        $('.set-active').toggleClass('set-active');
        $(need).toggleClass('set-active')
    }

    nextSlide() {
        const {imgs, slide} = this.state;
        const marginOfActiveSlide = parseInt($(`#slide-${slide}`).css('marginLeft'));

        if(imgs.length > slide) {
            $(`#slide-${slide}`).css({
                marginLeft: `-${marginOfActiveSlide+ 100}%`
            });
            this.setState({
                slide: slide + 1
            })
        }else{
            // const allSlides = $('.slides');
            // for(let i = slide - 2; i >= 0; i--){
            //     $(allSlides[i]).animate({
            //         marginLeft: `0%`
            //     }, 500);
            // }
            // this.setState({
            //     slide:1
            // })
        }
    }

    prevSlide(){
        const {imgs,slide} = this.state;

        if(slide > 1) {
            $(`#slide-${slide-1}`).css({
                marginLeft: `0%`
            }, 500);
            this.setState({
                slide: slide - 1
            })
        }else{
            // const allSlides = $('.slides');
            // for(let i = 0; i <= imgs.length-2; i++){
            //     $(allSlides[i]).css({
            //         marginLeft: `-100%`
            //     }, 500);
            // }
            // this.setState({
            //     slide:imgs.length
            // })
        }
    }

    manualSlide(id){
        const { slide } = this.state;
        const allSlides = $('.slides');

        if(id > slide){
           for(let i = id-2; i >= slide-1; i--){
               $(allSlides[i]).css({
                   marginLeft: `-100%`
               }, 500);
           }
           this.setState({
               slide: id
           })
        }else{
            for(let i = id - 1; i <= slide; i++){
                $(allSlides[i]).css({
                    marginLeft: `0%`
                }, 500);
            }

            this.setState({
                slide: id
            })
        }
    }





    render() {
        const { imgs } = this.state;
        const imgReturn = [];
        const settingReturn = [];
        imgs.map((item, index)=>{
            imgReturn.push(<div style={{backgroundImage: `url(src/slider/${item})`}}  className={`slides`} id={`slide-${index+1}`} key={index}/>);
                settingReturn.push(<div className="set" key={index} onClick={()=>{
                    this.manualSlide(index+1);
                }}/>);
        });
        return (
            <div className="intro" id={`intro`}>
                <div className="slider">
                    <i className={'icon-left-open-big'} onClick={()=>{
                        this.prevSlide();
                    }}/>
                    {imgReturn}
                    <i className={'icon-right-open-big'} onClick={()=>{
                        this.nextSlide();
                    }}/>

                </div>
                <div className="layer-for-slider"/>
                <div className="settings">
                    {settingReturn}
                </div>
                <div className="intro-text">
                    <h1>Безопасность в любой ситуации.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis dolorem ea eum omnis possimus quod reiciendis rerum sunt voluptas?</p>
                    <div className="btn">Заказать звонок</div>
                </div>
                    <svg className="arrows" onClick={()=>{
                        $('html, body').animate({
                            scrollTop: ($('#adv').offset().top)
                        },1200);
                    }}>
                        <path className="a1" d="M0 0 L10 9 L20 0"/>
                        <path className="a2" d="M0 20 L10 29 L20 20"/>
                        {/*<path className="a3" d="M0 40 L15 52 L30 40"/>*/}
                    </svg>
            </div>
        )
    }
}