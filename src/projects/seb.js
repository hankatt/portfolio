import '../App.css';
import './seb.css';
import {
  Link
} from "react-router-dom";

function Seb() {
  return (
    <>
      <div className="section-title-container">
        <div className="values-container">
          <div className="values-message">
            <h1 className="section-title">SEB—<br /><em>Skandinaviska Enskilda Banken</em></h1>
          </div>
        </div>
      </div>
      <section className="narrative-section">
        <p className="eyebrow-text">
          2021–2024
        </p>
        <h4 className="subtitle-text col-half">
          At Bontouch we've partnered with SEB for over a decade. I started in one of their agile product teams, grew in to a design lead role and focused primarily on long-term discovery projects and visions, supporting the other designers and shaping our hybrid design team culture.
        </h4>
        {/* <h4 className="subtitle-text col-half">
          Hybrid teams.. talk about it.
        </h4>
        <h4 className="subtitle-text col-half">
          I worked primarily on long-term discovery projects and visions and supporting other designers, while growing in to the design lead role that I took on as our previous lead left. The project team tripled in size during my time, and the design team doubled.
        </h4>
        <h4 className="subtitle-text col-half">
          I am particularly proud of my efforts to create a design team culture with a sense of one team, which I think is important when we're coming from different employers.
        </h4> */}
      </section>
    </>
  );
}

export default Seb;