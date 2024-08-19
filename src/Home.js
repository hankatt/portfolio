import './App.css';
import {
  Link
} from "react-router-dom";

import clientLogoKlarna from './img/client-logo-klarna.png'
import clientLogoRGA from './img/client-logo-rga.png'

function Home() {
  return (
    <>
      <div className="landing-page-expand">
        <div className="section-title-container landing-page">
          <div className="values-container">
            {/*
            <div className="values-timer">
              <div className="values-timer-arm"></div>
            </div>
            */}
            <div className="values-message">
              <h1 className="hero-title">product design & design systems.<br/>for companies in all stages.</h1>
            </div>
          </div>
        </div>
        <section className="spaceBetween wrap landing-page-footer">
          <div className="clients current">
            <div className="client">
              <a href="#!" className="client-name">currently</a>
              <div className="client-logo bontouch"></div>
            </div>
          </div>
          <div className="clients">
            <div className="client">
              <a href="#!" className="client-name">ex.</a>
              <img src={clientLogoKlarna} className="client-logo klarna" />
            </div>
            <div className="client">
              <img src={clientLogoRGA} className="client-logo rga" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;