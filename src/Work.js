import './App.css';
import './Work.css'
import CaseImageSEB from './img/case-image-seb.png'
import CaseImageKlarna from './img/case-image-klarna-mp.png'
import CaseImageEttui from './img/case-image-ettui.png'
import CaseImageVolvoCars from './img/case-image-volvo-cars.png'

function Work() {
  return (
    <>
      <div id="work">
        <div className="project-title-container flex flex-col">
          <h1 className="text-large">selected work</h1>
        </div>
        <section className="landing-page-cases v-spacing-medium flex flex-col">
          <div className="cases-row">
            <a href="/seb" className="landing-page-case seb">
              <div className="flex spaceBetween align-baseline">
                <p className="text-medium"><em>Case study</em></p><p className="text-right text-medium">2021–2023</p>
              </div>
              <img className="case-image" src={CaseImageSEB} alt="3 images of SEB app" />
              <div className="case-title flex align-baseline" style={{ "column-gap": 8 }}>
                <h1 className="text-xlarge">SEB</h1>  
                <h2 className="text-medium"><em>iOS & Android app</em></h2>
              </div>  
              <p className="text-medium">
                <em>A leading bank in the nordics region.</em>
              </p>
              <p className="text-small">
                <em>#consumerapp #vision #discovery #designlead #teambuilding #designsystem #ui #ux</em>
              </p>
            </a>
            <a href="/klarna-mp-ui" className="landing-page-case">
                <div className="flex spaceBetween align-baseline">
                  <p className="text-medium"><em>Case study</em></p><p className="text-right text-medium">2016, 2019–2021</p>
                </div>
                <img className="case-image" src={CaseImageKlarna} alt="3 images of Klarna's Merchant Portal" />
                <div className="case-title flex align-baseline" style={{ "column-gap": 8 }}>
                  <h1 className="text-xlarge">Klarna</h1>  
                  <h2 className="text-medium"><em>Merchant Portal</em></h2>
                </div>  
                <p className="text-medium">
                  <em>From regional BNPL to global behemoth.</em>
                </p>
                <p className="text-small">
                  <em>#b2b #vision #productdesign #visualdesign #designsystem #scalingteams #programming #react</em>
                </p>
            </a>
            <a href="http://www.ettui.com" target="_blank" rel="noopener" className="landing-page-case">
                <div className="flex spaceBetween align-baseline">
                  <p className="text-medium"><em>ettui.com</em></p><p className="text-right text-medium">'93 til ∞</p>
                </div>
                <img className="case-image" src={CaseImageEttui} alt="2 images of ettúi app" />
                <div className="case-title flex align-baseline" style={{ "column-gap": 8 }}>
                  <h1 className="text-xlarge">ettúi</h1>  
                  <h2 className="text-medium"><em>personal</em></h2>
                </div>  
                <p className="text-medium">
                  <em>Self-made Pinterest-for-Text.</em>
                </p>
                <p className="text-small">
                  <em>#everything, from database to design</em>
                </p>
            </a>
            <a href="/volvo" rel="noopener" className="landing-page-case">
                <p className="text-right text-medium">2015</p>
                <img className="case-image" src={CaseImageVolvoCars} alt="2 images of ettúi app" />
                <div className="case-title flex align-baseline" style={{ "column-gap": 8 }}>
                  <h1 className="text-xlarge">Volvo Cars</h1>  
                </div>  
                <p className="text-medium">
                  <em>As a Visual designer at R/GA I worked with the global Volvo Cars .com site.</em>
                </p>
                <p className="text-small">
                  <em>#visualdesign</em>
                </p>
            </a>
            {/* <a href="/seb" style={{ "width": "100%" }}>
              <div className="landing-page-case">
              <div className="flex spaceBetween">
                <div className="flex flex-col">
                <h3 className="text-large">
                  SEB
                </h3>
                <p className="text-medium">
                  <em>Helping design look ahead.</em>
                </p>
                <p className="text-medium">
                  A leading bank in the Nordics region. I worked with their native app through a transformative time. I focused on discovery work, the design team and a few features that are live today.
                </p>
                <p className="text-medium">
                  <em>
                    #b2c #vision #discovery #designlead #teambuilding #designsystem #ui #ux
                  </em>
                </p>
                </div>
                
                <p className="text-medium" style={{ "whiteSpace": "nowrap", "transform": "translateY(7px)" }}><em>2021–2023</em></p>
              </div>
            </div>
          </a>
          <a href="/klarna-mp-ui" style={{ "width": "100%" }}>
            <div className="landing-page-case">
              <div className="flex spaceBetween">
                <div className="flex flex-col">
                  <h3 className="text-large">
                    <a href="/klarna-mp-ui">Klarna</a>
                  </h3>
                  <p className="text-medium">
                    <em>From 10-ish designers to the 100's, and 2 rebrandings.</em>
                  </p>
                  <p className="text-medium">
                    <ul>
                      <li>First designs for the Shopping app, working closely with the Directors and C-suite.</li>
                      <li>1 of 3 designers in the Design Systems team. Got my own Design Systems team.</li>
                      <li>Built Merchant Portal from a simple order management tool to an everything-a-merchant-needs portal made up of 15+ teams.</li>
                    </ul>
                  </p>
                  <p className="text-medium">
                    <em>
                      #b2b #b2c #vision #designdirection #designsystem #scalingdesign #programming #react
                    </em>
                  </p>
                </div>
                <p className="text-medium" style={{ "whiteSpace": "nowrap", "transform": "translateY(7px)" }}><em>2016–2021</em></p>
              </div>
            </div>
          </a> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;