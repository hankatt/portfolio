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
              <h1 className="values-title">Senior designer. <em>I help companies navigate the intersection of business, technology and design.</em></h1>
              <h4 className="values-description"><em>I guide product leaders from discovery to design, of both small features & big visions. I leverage design systems to deliver quality at speed. I translate brands into beautiful and accessible products.</em></h4>
              {/* <div className="button-primary">
                <h4 className="values-description button-primary-text">View some of my work</h4>
              </div> */}
            </div>
          </div>
        </div>
        <section className="spaceBetween wrap landing-page-footer">
          <div className="clients current">
            <div className="client">
              <span className="client-name current">currently</span>
              <a href="/seb" className="client-name">
                <div className="client-logo current bontouch"></div>
              </a>
            </div>
          </div>
          <div className="clients">
            <div className="client">
              <span className="client-name">ex.</span>
              <a href="/klarna-mp-ui" className="client-name">
                <img src={clientLogoKlarna} className="client-logo klarna" />
              </a>
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