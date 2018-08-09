import React, {Component} from 'react';

export default class Contact extends Component {
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    render() {
        const { contacts, contactForm } = this.props;

        return (
            <div className="contact" id={`contact`}>
                {/*<div className="map">*/}
                    {/*<iframe*/}
                        {/*src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81675.58174014039!2d30.60873277793754!3d50.448643101234374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb87a88d3%3A0xd0c56669a5fa6f96!2z0L_RgNC-0YHQv9C10LrRgiDQrtGA0ZbRjyDQk9Cw0LPQsNGA0ZbQvdCwLCAyNywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1531321647882"*/}
                        {/*width="100%" height="100%" frameBorder="0"  allowFullScreen/>*/}
                {/*</div>*/}
                <div className="info">
                    <div className="text">
                        <h2 className={`with-left-stroke`}>Контакты</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias dolorem, est laboriosam laudantium unde.</p>
                        <div className="contact-socials">
                            <ul>
                                {/*<li className={'inst'} onClick={()=>{*/}
                                    {/*window.open(`${contacts.socials.insta}`);*/}
                                {/*}}><i className={'icon-instagram'}/></li>*/}

                                <li className={'fb'} onClick={()=>{
                                    window.open(`${contacts.socials.fb}`);
                                }}><i className={'icon-facebook'}/></li>

                                <li className={'youtube'} onClick={()=>{
                                    window.open(`${contacts.socials.youtube}`);
                                }}><i className={'icon-youtube'}/></li>
                                <li className={`special`}>
                                    <a href={`tel:${contacts.telephone}`}><i className={`icon-phone`}/>{contacts.telephone}</a>
                                </li>
                                <li className={`special`}>
                                    <a href={`mailto:${contacts.mail}`}><i className={`icon-mail`}/>{contacts.mail}</a>
                                </li>
                            </ul>
                            {/*<div className="more">*/}
                               {/**/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="form">
                        <div className="form-container">
                            <div className="left">
                            <span className={`name`}>Имя</span>
                            <input type="text" id={'name'}  ref={`name`}/>

                            <span className={`mail`}>Email</span>
                            <input type="mail" id={'mail'}  ref={'mail'}/>

                            <span className={`tel`}>Телефон</span>
                            <input type="number" id={'tel'}  ref={`tel`}/>
                            </div>
                            {/*<span className="msg">Message</span>*/}
                            <div className="right">
                                <textarea name="msg" id="msg" placeholder={`Сообщение`} ref={`msg`}/>
                            </div>
                        </div>
                        <div className="btn" onClick={()=>{
                            const { name, mail, tel, msg } = this.refs;
                            contactForm('contactForm',name,tel, mail,msg);
                        }}>Отправить</div>
                    </div>
                </div>
            </div>
        )
    }
}