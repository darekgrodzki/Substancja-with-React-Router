import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll, scroller, Element} from 'react-scroll';

export class Offer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            offerPage: [
                "Roll up'y",
                "Banery reklamowe",
                "Naklejki",
                "Ścianki reklamowe",
                "Oklejanie witryn",
                "Oklejanie pojazdów",
                "Plakaty i fototapety",
                "Wizytówki",
                "Ulotki",
                "Projekty",
                "Strony www",
                "Jak zamawiać"
            ]

        };
    }

    render() {

        let menuOffer = this.state.offerPage.map((element, index) => {

            return <div className="red" key={index} onClick={() => scroller.scrollTo(index, {
                duration: 1000,
                smooth: 'easeOutQuad',
                offset: -30
            })}>
                <span>{element}</span><img src={'./img/offerIcons/' + index + '.png'}/></div>;

        });

        return <div className="offer">
            <div className="naviOffer">{menuOffer}</div>
            <div className="three"></div>
            <Element name="0" className="rollup"></Element>
            <Element name="1" className="offerGroup">
                <h2>
                    <strong>Banery reklamowe</strong>
                </h2>
                <p className="styl12">Najpopularniejsza forma reklamy zewnętrznej, najczęściej zawieszane na ścianach budynków lub ogrodzeniach. Zaletami naszych banerów oprócz rozsądnych cen jest przede wszystkim bardzo wysoka jakość wydruków przez co relacja ich jakości do ceny jest na najwyższym możliwym poziomie. W naszej ofercie posiadamy:
                </p>

                <div className="tytul">
                    <div className="subtitle">Ceny pln netto za m2 / dla wielkości całego zamówienia.</div>
                    <div className="nazwa">Ilość m2</div>
                    <div className="cena">
                        <strong>&lt;3</strong>
                    </div>
                    <div className="cena">
                        <strong>3-10</strong>
                    </div>
                    <div className="cena">
                        <strong>10-50</strong>
                    </div>
                    <div className="cena">
                        <strong>&gt;50</strong>
                    </div>
                    <div className="nazwa">Baner laminowany</div>
                    <div className="cena">33</div>
                    <div className="cena">28</div>
                    <div className="cena">23</div>
                    <div className="cena">18</div>
                    <div className="nazwa">Baner powlekany</div>
                    <div className="cena">43</div>
                    <div className="cena">38</div>
                    <div className="cena">33</div>
                    <div className="cena">28</div>
                    <div className="nazwa">Baner dwustronny</div>
                    <div className="cena">70</div>
                    <div className="cena">65</div>
                    <div className="cena">60</div>
                    <div className="cena">55</div>
                    <div className="nazwa">Baner odblaskowy</div>
                    <div className="cena">70</div>
                    <div className="cena">65</div>
                    <div className="cena">60</div>
                    <div className="cena">55</div>
                    <div className="nazwa">Siatka mesh</div>
                    <div className="cena">38</div>
                    <div className="cena">33</div>
                    <div className="cena">28</div>
                    <div className="cena">23</div>
                </div>
            </Element>
            <Element name="2" className="naklejki"></Element>
            <Element name="3" className="offerGroup">
                <h2>
                    <strong>Ścianki reklamowe - POP UP</strong>
                </h2>
                <p class="styl12">Potrzebujesz ściankę reklamową... to dobrze trafiłeś!<br/>
                    Produkujemy POP UP'y
                    <strong>łukowe</strong>
                    i
                    <strong>proste</strong>
                    w różnych rozmiarach.
                    <br/>

                    <strong>Dlaczego nasze ścianki?</strong>
                    <br/>
                    Ponieważ drukujemy grafiki z
                    <strong>fotograficzną jakością</strong>
                    i zabezpieczamy je bardzo dobrym
                    <strong>laminatem strukturalnym
                    </strong>typu stoplight. Dodatkowo używamy nieprześwitujących podkładów polipropylenowych do naklejania folii, a w konstrukcje ścianek zaopatrujemy się u solidnych producentów. Efekt jest taki, że nasze produkcje zadowolą nawet najbardziej wymagających klientów.<br/>
                    Chcesz dowiedzieć się więcej lub otrzymać
                    <strong>wycenę</strong>,
                    <strong>zadzwoń</strong>
                    lub napisz do nas
                    <strong>maila</strong>,
                    <br/>
                    z przyjemnością odpowiemy na wszystkie Twoje pytania.</p>

            </Element>
            <Element name="4" className="witryny"></Element>
            <Element name="5" className="samochody"></Element>
            <Element name="6" className="palakty"></Element>
            <Element name="7" className="wizytowki"></Element>
            <Element name="8" className="ulotki"></Element>
            <Element name="9" className="projekty"></Element>
            <Element name="10" className="www"></Element>
            <Element name='11' className="offerGroup">
                <h2>
                    <strong>Zamówienia</strong>
                </h2>
                <h2>Jak składać zamówienia:</h2>
                <p>- mailowo: na adres
                    <a href="mailto:info@substancja.eu">info@substancja.eu</a>, podając dokładne informacje zamawianego produktu ( wymiar, ilość, rodzaj materiału itp.), dane kontaktowe oraz dane do faktury. Prosimy także o podanie formy płatności oraz sposobu odbioru.<br/>
                    - telefonicznie.</p>
                <h2>Płatności:
                </h2>
                <p>Przewidziane są 3 rodzaje płatności:<br/>
                    - płatność gotówką przy odbiorze/za pobraniem<br/>
                    - przedpłata należności na konto<br/>
                    - stali klienci mają możliwość otrzymania faktury z odroczonym terminem płatności<br/>
                    Przy zamówieniach powyżej 3000 zł brutto wymagamy zaliczki w wysokości 30% wartości faktury.</p>
                <h2>Numer konta:</h2>
                <p>
                    <strong>mBank 58 1140 2004 0000 3902 5802 0139<br/>
                        Substancja<br/>
                        05-074 Brzeziny 1L
                    </strong>
                </p>
                <h2>Odbiory i wysyłki:</h2>
                <p>- Odbiór osobisty w siedzibie firmy (Brzeziny koło Warszawy)<br/>
                    - Przesyłka kurierska, koszt przesyłki wg. aktualnego cennika przewoźnika, zależny od wagi.<br/>
                    - Paczka pocztowa. Koszt przesyłki wg. cennika Poczty Polskiej.</p>
                <h2>Projekty:</h2>
                <p>Jeśli nie posiadają Państwo własnego projektu oferujemy jego stworzenie.
                </p>
                <p>Jeśli mają Państwo własny projekt prosimy o sprawdzenie czy jest zgodny z poniższą specyfikacją.
                </p>
                <p>Przygotowanie plików produkcyjnych do druku solwentowego:</p>
                <p>- Pliki należy przygotowywać w skali 1:1<br/>
                    - Minimalna rozdzielczość zdjęć to 150 DPI<br/>
                    - Prace powinny być zapisywane w następujących formatach: eps(cs2), PDF, TiFF z kompresją LZW, cdr(ver.11, czcionki zamienione na krzywe), jpg.<br/>
                    - Materiały należy przygotowywać w trybie kolorystycznym CMYK 32-bity<br/>
                    - Prace przeznaczone do druku banerów lub siatek należy przygotowywać bez spadów. Prace do wyklejania na twardych podłożach muszą mieć spady po 5 mm z każdego boku.<br/>
                    - Nie należy dodawać drukarskich znaków cięcia i paserów. W przypadku białego tła należy dodać ramkę wyznaczającą granicę projektu.</p>
            </Element>
            <a onClick={() => animateScroll.scrollToTop({duration: 3000, delay: 100, smooth: true})}>Scroll To Bottom</a>

        </div>

    }

}
