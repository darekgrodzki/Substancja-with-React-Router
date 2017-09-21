import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Stickers extends React.Component {

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
              <strong>Naklejki</strong>
          </h2>
          <h3>
              <strong>Folia samoprzylepna z nadrukiem</strong>
          </h3>

          <p>- bardzo wszechstronne zastosowanie, przeznaczona do ekspozycji zewnętrznych jak i wewnętrznych. Stosuje się ją na płaskie powierzchnie, do wyklejania witryn sklepowych oraz jako zwykłe małe naklejki.</p>

          <h3>
              <strong>Folia One Way Vision</strong>
          </h3>

          <p>- folia perforowana, samoprzylepna - stosowana do wyklejania szyb samochodowych i witryn. Jej perforowana struktura pozwala na stosowanie wszędzie tam gdzie potrzebna jest dobra widoczność od wewnątrz.</p>

          <h3>
              <strong>Folia odblaskowa z nadrukiem</strong>
          </h3>

          <p>- doskonałe rozwiązanie na tablice reklamowe lub do częściowego oklejania samochodów, sprawia, że reklamy są widoczne przez całą dobę np. w świetle latarni lub reflektorów samochodowych.</p>

          <h3>
              <strong>Laminacja wydruków</strong>
          </h3>

          <p>- dodatkowe zabezpieczenie nadruku przed warunkami atmosferycznymi oraz uszkodzeniami mechanicznymi, ułatwia także aplikację folii.</p>

          <h3>
              <strong>Wycinanie naklejek po obrysie</strong>
          </h3>

          <p>- oferujemy cięcie naklejek do dowolnego kształtu, zarówno z folii zadrukowanej jak i innych folii kolorowych.</p>

            </div>
</div>

    }

}
