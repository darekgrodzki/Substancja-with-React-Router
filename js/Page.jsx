import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {Scroll, animateScroll} from 'react-scroll';
import {Main} from './MainContent.jsx';
import {Offer} from './Offer.jsx';
import {Portfolio} from './Portfolio.jsx';
import {Contact} from './Contact.jsx';
import {Footer} from './footer.jsx';
import {Banners} from './offer/banners.jsx';
import {Rollups} from './offer/rollups.jsx';
import {Stickers} from './offer/stickers.jsx';
import {Popups} from './offer/popups.jsx';
import {Wrapping} from './offer/wrapping.jsx';
import {CarWrapping} from './offer/cars.jsx';
import {Posters} from './offer/posters.jsx';
import {Cards} from './offer/cards.jsx';
import {Flyers} from './offer/flyers.jsx';
import {Projects} from './offer/projects.jsx';
import {Websites} from './offer/websites.jsx';
import {Orders} from './offer/orders.jsx';
require('../scss/main.scss');

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {

        constructor(props) {
            super(props);

            this.state = {

                buttonsText: [

                    [
                        "", "Home"
                    ],
                    [
                        "oferta", "Oferta"
                    ],
                    [
                        "portfolio", "Portfolio"
                    ],
                    ["kontakt", "Kontakt"]
                ],
                hamburgerClass: false,
                goToTop: false,
                concept: false,
                stickyMenu: false
            };

        }

        componentDidMount() {

            window.addEventListener('scroll', this.myfunction);

            setTimeout(() => {
                this.setState({concept: true});
            }, 700);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.myfunction);
        }

        myfunction = () => {
            if (window.pageYOffset < 40) {
                this.setState({stickyMenu: false, goToTop: false});
            } else if (window.pageYOffset >= 40 && window.pageYOffset <= 300) {
                this.setState({goToTop: false, stickyMenu: true})
            } else {
                this.setState({goToTop: true})
            }
        }

        changeClass = (a) => {
            this.setState({hamburgerClass: a})
        }

        render() {

            let menu = this.state.buttonsText.map((element, index) => {

                if (element[0] === "oferta") {
                    return <NavLink to={`/${element[0]}`} className="linkTo" activeClassName="active" key={index}>
                        <div className="cube">
                            <div className="second">
                                <span>{element[1]}</span>
                            </div>
                            <div className="first">
                                <span>{element[1]}</span>
                            </div>
                        </div>
                    </NavLink>
                } else {
                    return <NavLink exact to={`/${element[0]}`} className="linkTo" activeClassName="active" key={index}>
                        <div className="cube">
                            <div className="second">
                                <span>{element[1]}</span>
                            </div>
                            <div className="first">
                                <span>{element[1]}</span>
                            </div>
                        </div>
                    </NavLink>
                }
            });

            let goToTop;
            if (this.state.goToTop === true) {
                goToTop = <div className="goToTop" onClick={() => animateScroll.scrollToTop({duration: 1000, smooth: true})}><img src="./img/do_gory.png"/></div>
            } else {
                goToTop = <div className="goToTop goToTopHide"><img src="./img/do_gory.png"/></div>
            }

            let menuHamburger;
            if (this.state.hamburgerClass === true) {
                menuHamburger = this.state.buttonsText.map((element, index) => {
                    return <NavLink exact to={`/${element[0]}`} className="hamburgerButton" activeClassName="hamburgerButtonActive" key={index} onClick={e => this.changeClass(false)}>{element[1]}</NavLink>
                });
            }

            let hamburger;
            if (this.state.hamburgerClass === false) {
                hamburger = <div className="menu-toggle" onClick={e => this.changeClass(true)}>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            } else {
                hamburger = <div className="menu-toggle open" onClick={e => this.changeClass(false)}>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            }
            let header;
            if (this.state.stickyMenu === true) {
                header = <div className="headerContainer stickyMenu">
                    <div className="header">
                        <nav>
                            <img src="./img/logo.png"/>
                            <ul>{menu}</ul>

                            {hamburger}
                            <div className="hamburgerNavi">
                                {menuHamburger}
                            </div>
                        </nav>
                    </div>
                </div>
            } else {
                header = <div className="headerContainer">
                    <div className="header">
                        <nav>
                            <img src="./img/logo.png"/>
                            <ul>{menu}</ul>

                            {hamburger}
                            <div className="hamburgerNavi">
                                {menuHamburger}
                            </div>
                        </nav>
                    </div>
                </div>
            }

            let concept;
            if (this.state.concept === true) {
                concept = <div className="conceptContainer">
                    <div className="conceptDiv">
                        <p>DRUK W DUŻYM I MAŁYM
                        </p>
                        <p>FORMACIE</p>
                        <p>& STUDIO REKLAMY</p>
                    </div>
                </div>
            } else {
                concept = <div className="conceptContainer">
                    <div className="conceptDivBlank">
                        <p>DRUK W DUŻYM I MAŁYM
                        </p>
                        <p>FORMACIE</p>
                        <p>& STUDIO REKLAMY</p>
                    </div>
                </div>
            }

            return (
                <BrowserRouter>
                    <div>
                        <header>
                            {header}
                            {concept}
                        </header>
                        <div className="three"></div>
                        {goToTop}

                        <div>
                            <Route exact path="/" component={Main}/>
                            <Route path="/oferta" component={Offer}/>
                            <Route path="/oferta/rollupy" component={Rollups}/>
                            <Route path="/oferta/banery" component={Banners}/>
                            <Route path="/oferta/naklejki" component={Stickers}/>
                            <Route path="/oferta/popupy" component={Popups}/>
                            <Route path="/oferta/witryny" component={Wrapping}/>
                            <Route path="/oferta/reklama_na_samochodach" component={CarWrapping}/>
                            <Route path="/oferta/plakaty_i_fototapety" component={Posters}/>
                            <Route path="/oferta/wizytowki" component={Cards}/>
                            <Route path="/oferta/ulotki" component={Flyers}/>
                            <Route path="/oferta/Projekty" component={Projects}/>
                            <Route path="/oferta/strony_www" component={Websites}/>
                            <Route path="/oferta/zamowienia" component={Orders}/>
                            <Route path="/portfolio" component={Portfolio}/>
                            <Route path="/kontakt" component={Contact}/>
                        </div>
                        <Footer/>
                    </div>
                </BrowserRouter>

            )

        }

    }
    ReactDOM.render(
        <App/>, document.getElementById('app'));

});
