import React from 'react';
import ReactDOM from 'react-dom';

export class Contact extends React.Component {

    render() {


        return <div className="contact">
            <img src="./img/logo.png"/>
            <div>
                <img src="./img/telBig.png"/>
                <h1>tel.: 022 760 33 16<br/>
                    tel.kom.: 691 75 62 75<br/>
                    <a href="mailto:info@substancja.eu">info@substancja.eu</a>
                </h1>
                <img src="./img/mailBig.png"/>
            </div>
            <p>Brzeziny 1L, 05-074 Halinów</p>
            <a href="https://www.google.pl/maps/dir//Substancja+-+Banery+reklamowe,+Roll+upy,+Oklejanie+witryn+i+samochod%C3%B3w,+Ulotki,+Wizyt%C3%B3wki,+Brzeziny+1L,+05-074+Halin%C3%B3w/@52.1965384,21.3043865,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x471f2a0bf7f9b46f:0x9f937268907a4b16!2m2!1d21.374598!2d52.196454!3e0" target="_blank">GPS: 52°11'47''N, 21°22'27''E</a>

            <p>pn. - pt. 9 - 17<br/>
                sob. 10 - 13<br/>
                (w soboty prosimy o kontakt przed przyjazdem)
            </p>

            <h2>Mapka dojazdu</h2>

            <p>
                <iframe src="https://maps.google.pl/maps/ms?msid=201374912188785340362.0004b3563160c6d619aa1&amp;msa=0&amp;ie=UTF8&amp;t=m&amp;source=embed&amp;ll=52.216863,21.29425&amp;spn=0.294483,0.686646&amp;z=10&amp;output=embed"></iframe>
            </p>
        </div>

    }

}
