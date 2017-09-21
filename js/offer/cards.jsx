import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Cards extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let position = this.refs.top.getBoundingClientRect().top + window.pageYOffset - 200;
        animateScroll.scrollTo(position, {
            duration: 700,
            smooth: true
        });
    }

    render() {

        return <div className="offer" ref="top">
            <div className="offerGroup">
                <h2>
                    <strong>Wizytówki</strong>
                </h2>

                <p>
                    Drukujemy je przy mniejszych nakładach w technologii cyfrowej lub przy większych offsetowo. Mamy możliwość wykonania ich w wielu opcjach np.:
                </p>
                <p>- na papierach niepowlekanych,</p>
                <p>- na papierze kredowym,</p>
                <p>- zalaminowane folią matową lub błyszczącą,</p>
                <p>- w formie kart plastikowych,</p>
                <p>- z selektywnym lakierem wypukłym,</p>
                <p>- tłoczone.</p>
                <div className="offerImage">
                    <img src="../img/offerProducts/wizytowki.jpg"/>
                    <img src="../img/offerProducts/wizytowki2.jpg"/>
                </div>
                <p className="margin">
                    Poniżej ceny netto najczęściej przez nas wykonywanych wizytówek.
                </p>

                <div className="offerTable">
                    <div className="subtitle">
                        Kreda 350g plus laminat matowy - rozmiar 90 x 50 mm lub 85 x 55 mm
                    </div>
                    <div className="nazwa">Rodzaj / Ilość sztuk</div>
                    <div className="cena">
                        <strong>250</strong>
                    </div>
                    <div className="cena">
                        <strong>500</strong>
                    </div>
                    <div className="cena">
                        <strong>1000</strong>
                    </div>
                    <div className="cena">
                        <strong>2000</strong>
                    </div>
                    <div className="nazwa">
                        Jednostronne
                    </div>
                    <div className="cena">
                        70
                    </div>
                    <div className="cena">
                        100
                    </div>
                    <div className="cena">
                        150
                    </div>
                    <div className="cena">
                        225
                    </div>
                    <div className="nazwa">
                        Dwustronne
                    </div>
                    <div className="cena">
                        80
                    </div>
                    <div className="cena">
                        110
                    </div>
                    <div className="cena">
                        160
                    </div>
                    <div className="cena">
                        245
                    </div>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                        Kreda 350g, laminat matowy i lakier selektywny, wypukły - rozmiar 90 x 50 mm lub 85 x 55 mm
                    </div>
                    <div className="nazwa">
                      Rodzaj / Ilość
                    </div>
                    <div className="cena">
                        <strong>250</strong>
                    </div>
                    <div className="cena">
                        <strong>500</strong>
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="nazwa">
                      Jednostronne
                    </div>
                    <div className="cena">
                      120
                    </div>
                    <div className="cena">
                      160
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="nazwa">
                      Dwustronne
                    </div>
                    <div className="cena">
                      140
                    </div>
                    <div className="cena">
                      195
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                </div>
            </div>
        </div>

    }

}
