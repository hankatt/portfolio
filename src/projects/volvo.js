import '../App.css';
import './volvo.css';
import HeroImage from '../img/case-image-volvo-cars.png'
import VolvoLanding1 from '../img/volvo-landing-1.jpg'
import VolvoLanding2 from '../img/volvo-landing-2.jpg'
import VolvoPolestarHero from '../img/volvo-polestar-hero-1.jpg'
import VolvoPolestarImg1 from '../img/volvo-polestar-hero-2.jpg'
import VolvoPolestarImg2 from '../img/volvo-polestar-hero-3.jpg'
import VolvoPolestarImg3 from '../img/volvo-polestar-campaign-soundcloud.jpg'
import VolvoPolestarImg4 from '../img/volvo-polestar-storystream.jpg'

function Volvo() {
  return (
    <>
      <div id="volvo">
        <div className="project-title-container flex flex-col">
            <h1 className="mega-title">Volvo Cars</h1>
            <section className="project-description v-spacing-medium column-6 responsive-resize flex-end">
              <h2 className="text-large">
                <em>As a Visual designer at R/GA I worked with the global Volvo Cars .com site.</em> An extremely talented team taught me a lot about sweating the details.
              </h2>
              <p className="project-description text-medium">
                †fun fact: I went to the Volvo Cars high school (GTG) in Göteborg and have stood on the assembly line contributing in the manufacturing of their cars.
              </p>
            </section>
        </div>
        <div className="v-spacing-large">
          <div className="hero-scroll">
            <img src={VolvoLanding1} alt="Volvo cars .com landing page with Avicii" />
            <img src={VolvoLanding2} alt="Volvo cars .com landing page with XC90 by water" />
          </div>
        </div>
        <div className="v-spacing-large flex flex-col">
          <div className="column-6 justify-right responsive-resize">
            <h2 className="text-large">
              <em>When designing the Polestar Engineered versions of the V60 and S60 </em>
              we collaborated globally across offices to stitch together the story we wanted to tell.
            </h2>
            <p className="text-medium">
            The design relies on a shared component and module system developed by us, to allow consistency at scale and ensure a quality experience on mobile as well as large desktops.
            </p>
            <p className="project-description text-medium">
                †reflection: I learned a lot under the design direction and mentorship of the inspiring and talented designer <a class="navigation-link" href="https://lah.se/">Lars Hansson</a>, who reinforced my appreciation for the visual craft.
              </p>
          </div>
        </div>
        <div className="v-spacing-medium">
          <div className="section-hero">
            <img src={VolvoPolestarHero} alt="A Polestar blue Volvo V60 and S60" />
          </div>
          <div className="section-scroll v-spacing-medium">
            <img src={VolvoPolestarImg1} alt="S60 from the front on a beach" />
            <img src={VolvoPolestarImg2} alt="V60 from the side on country side road" />
            <img class="ar-3" src={VolvoPolestarImg3} alt="Embedded, Polestar branded, Soundcloud player" />
            <img src={VolvoPolestarImg4} alt="Embedded, Polestar branded, social media feed" />
          </div>
        </div>
        <div className="v-spacing-large">

        </div>
      </div>
    </>
  );
}

export default Volvo;