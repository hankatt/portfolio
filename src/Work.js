import './App.css';
import './Work.css'

function Work() {
  return (
    <>
      <div id="work">
        <div className="project-title-container flex flex-col">
          <h1 className="text-large">selected work</h1>
        </div>
        <section className="landing-page-cases v-spacing-small flex flex-col">
          <div className="flex v-spacing-small" style={{ "gap": "30px", "marginBottom": 180 }}>
            <a href="/seb" style={{ "width": "100%" }}>
              <div className="landing-page-case" style={{
                "width": "100%",
                "padding": "40px",
                "background": "#111",
                "boxSizing": "border-box"
                //  "background": "linear-gradient(0deg, rgba(37, 39, 44, 0.4) 4.22%, rgba(39, 40, 42, 0.4) 19.09%, rgba(50, 52, 54, 0.4) 50.32%, rgba(52, 54, 56, 0.4) 73.31%, rgba(44, 45, 49, 0.4) 95.54%)",
              }}>
              <div className="flex spaceBetween">
                <div className="flex flex-col">
                <h3 className="text-large">
                  SEB
                </h3>
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
            <div className="landing-page-case" style={{
              "width": "100%",
              "padding": "40px",
              "background": "#090909",
              "boxSizing": "border-box"
              // "background": "linear-gradient(0deg, rgba(37, 39, 44, 0.4) 4.22%, rgba(39, 40, 42, 0.4) 19.09%, rgba(50, 52, 54, 0.4) 50.32%, rgba(52, 54, 56, 0.4) 73.31%, rgba(44, 45, 49, 0.4) 95.54%)",
            }}>
              <div className="flex spaceBetween">
                <div className="flex flex-col">
                  <h3 className="text-large">
                    <a href="/klarna-mp-ui">Klarna</a>
                  </h3>
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