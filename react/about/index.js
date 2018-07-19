import React, {Component} from 'react';

export default class About extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="about">
                {/*<h1>В разработке</h1>*/}
                <div className="about-header">
                    <h1>О нас</h1>
                    <i className='icon-cancel' onClick={()=>{ history.push('/')}}/>
                </div>
                <div className="about-container">
                    <h2>Руевит</h2>
                    <p><span className={`padding`}>Специализированная</span> организация, деятельность которой направлена на обеспечение личной и объектовой безопасности. На территории Украины компания действует на основании Устава и лицензии МВД об охранной деятельности.</p>

                    <h3>В структуру «Руевит» входят следующие подразделения:</h3>
                    <ul>
                        <li onClick={()=>{ history.push('/service/0')}}>Отдел наземных операций</li>
                        <li onClick={()=>{ history.push('/service/1')}}>Отдел морских операций</li>
                        <li onClick={()=>{ history.push('/service/2')}}>Технический отдел</li>
                        <li onClick={()=>{ history.push('/service/3')}}>Юридический департамент</li>
                        <li onClick={()=>{ history.push('/service/4')}}>Отдел специальных операций</li>
                        <li onClick={()=>{ history.push('/service/5')}}>Отдел аналитики</li>
                    </ul>

                    <h3>Нашими клиентами являются:</h3>
                    <ul>
                        <li>Профессионалы, способные решать многозадачники в любых, самых сложных условиях</li>
                        <li>Участники антитеррористической операции на Донбасс</li>
                        <li>Сотрудники спецслужб, служившие в горячих точках</li>
                        <li>Высококлассные инструктора по безопасности</li>
                        <li>Телохранители, работающие с ВИП-персонами</li>
                        <li>Юристы и аудиторы</li>
                        <li>Аналитики экспертного уровня</li>
                    </ul>
                    <p><span className="padding">Все</span> сотрудники прошли специальную психологическую и медицинскую подготовку. </p>
                    <h3>В зависимости от ситуации, компания «Руевит» готова предоставить следующие услуги:</h3>
                    <ul>
                        <li>Охрана стратегически важных объектов (заводы, месторождения, порты)</li>
                        <li>Обеспечение порядка при проведении общественных мероприятий</li>
                        <li>Предоставление групп быстрого реагирования</li>
                        <li>Противодействие рейдерским захватам</li>
                        <li>Отражение атак, направленных на захват интеллектуальных или физических активов</li>
                        <li>Вооруженное сопровождение ценных грузов</li>
                        <li>Военизированный наземный и морской конвой</li>
                        <li>Выполнение задач клиента на территориях повешенной опасности</li>
                        <li>Личная безопасность</li>
                        <li>Скрытая охрана ВИП персон</li>
                        <li>Обеспечение безопасности групп на выездных мероприятиях</li>
                        <li>Аналитика деятельности организации</li>
                        <li>Сбор информации, внедрение, вербовка</li>
                        <li>Выявление угроз, определение их степени и разработка пошагового плана мероприятия по их нейтрализации</li>
                        <li>Техническое обслуживание бронетехники и воздушного транспорта</li>
                        <li>Юридическое сопровождение</li>
                        <li>Независимый аудит</li>
                    </ul>
                    <p><span className="padding">Учитывая</span> сложную ситуацию в стране, мы работаем в режиме 24/7, что позволяет оперативно реагировать на проблемы наших клиентов</p>
                    <p><b>Связаться с нами можно посредством специальной формы на сайте</b></p>
                </div>
            </div>
        )
    }
}