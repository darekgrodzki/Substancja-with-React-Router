import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Wrapping extends React.Component {

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
              <strong>Oklejanie witryn sklepowych</strong>
          </h2>

          <p>Chcesz wyróżnić swój sklep, restaurację lub inny lokal na tle konkurencji?</p>

          <p>Chcesz poprzez estetyczny wygląd i reklamę zachęcić potencjalnych klientów do korzystania ze swoich usług?</p>

          <p>Oferujemy profesjonalne oklejanie witryn sklepowych.</p>

          <p>Jest kilka opcji oklejania:</p>

          <p>- pełną folią zadrukowaną w dowolny sposób,</p>

          <p>- folią one way vision czyli zadrukowaną, dziurkowaną folią która daje efekt z jednej strony widocznej grafiki, a z drugiej jest widoczne to co jest na zewnątrz,</p>

          <p>- pełnymi, ozdobnymi foliami, występującymi w wielu kolorach i opcjach między innymi foliami szronionymi. Takie folie mogą być za pomocą plotera tnącego wycinane w różne kształty oraz napisy.</p>

          <p>Nasza usługa jest kompleksowa, składa się na nią zarówno projekt, druk jak i sam montaż. Staramy się zawsze używać jak najlepszych materiałów, aby witryny przez nas oklejone wyglądały świetnie przez długi czas. Koszt oklejania jest uzależniony od wielu czynników takich jak wielkość witryn, rodzaj folii, poziom trudności itp., dlatego w celu jego poznania prosimy o kontakt z nami.</p>
            </div>
</div>

    }

}
