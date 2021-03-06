import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Orders extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
      let position = this.refs.top.getBoundingClientRect().top + window.pageYOffset -200;
      animateScroll.scrollTo(position, {duration: 700, smooth: true});
    }

    render() {



        return <div className="offer" ref="top"><div className="offerGroup">
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


            </div>
</div>

    }

}
