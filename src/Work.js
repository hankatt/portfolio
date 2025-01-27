import './App.css';
import './Work.css'

function Work() {
  return (
    <>
      <div id="work">
        <div className="project-title-container flex flex-col">
          <h1 className="text-large">Selected work</h1>
        </div>
        <section className="landing-page-cases v-spacing-medium flex flex-col">
          <div className="cases-row">
            <a href="/seb" style={{ "width": "100%" }}>
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
          </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;