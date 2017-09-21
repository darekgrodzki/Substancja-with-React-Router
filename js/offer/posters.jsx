import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Posters extends React.Component {

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
              <strong>Plakaty i fototapety</strong>
          </h2>

          <h3>
              <strong>Plakaty</strong>
          </h3>
          <p>
              - potrzebujesz wydrukować plakaty? Drukujemy już od nakładu 1 szt. Maksymalna szerokość to 150 cm, długość dowolna. Wydruki w pełnym kolorze z fotograficzną jakością. Drukujemy na kilku rodzajach papieru:</p>

          <p>- Papier satynowany(citylight) 135 g/m2,</p>
          <p>- Papier satynowany 200 g/m2,</p>
          <p>- Papier fotograficzny/błyszczaćy 260 g/m2,</p>
          <p>- Blueback 115 g/m2 lub</p>
          <p>- Papier lateksowy.</p>

          <p>Jeżeli potrzebujesz dużego nakładu plakatów, chętnie wycenimy je dla Ciebie także w technologii offsetowej.</p>

          <h3>
              <strong>Fototapety</strong>
          </h3>
          <p>
              - chciałbyś nakleić tapetę na ścianę ze swoim zdjęciem lub z własnym projektem? Nie ma problemu, drukujemy na materiale specjalnie do tego celu przeznaczonym. Aplikujesz taki wydruk identycznie jak tapetę czyli na klej do tapet.</p>

            </div>
</div>

    }

}
