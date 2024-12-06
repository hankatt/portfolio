import '../App.css';
import './seb.css';
import HeroImage from '../img/case-seb-hero-1.png'
import DiscoveryTabImageDM from '../img/case-seb-discovery-tab-dm.png'
import DiscoveryTabImageLM from '../img/case-seb-discovery-tab-lm.png'
import MoreTabHeroDM from '../img/case-seb-more-tab-hero-dm.png'
import {
  Link
} from "react-router-dom";

function Seb() {
  return (
    <>
      <div id="seb">
        <div className="project-title-container">
            <h1 className="mega-title">SEB</h1>
            <section class="project-description v-spacing-medium column-6 responsive-resize justify-right">
              <h2 class="text-large">
                <em>Skandinaviska Enskilda Banken is one of the leading banks
                in the Nordics region.</em> On behalf of Bontouch I worked in a 
                mixed team† as a designer and design lead with their mobile apps.
              </h2>
              <p class="project-description text-medium">
                †a team consisting of designers from Bontouch and SEB
              </p>
            </section>
        </div>
        <div class="v-spacing-large">
          <div class="hero-image">
            <img src={HeroImage} />
          </div>
        </div>
        <section className="flex-col v-spacing-large">
          <div className="section-highlights flex-end">
            <h1 className="subtitle-text"><em>#productdiscovery</em></h1>
            <h1 className="subtitle-text">
              Repeatable product discovery
            </h1>
            <p className="text-medium">
              I spent a lot of time diving deeper into ideas and ambitions for the future. From my experiences, from Klarna, I was comfortable with researching and defining inspiring and feasible visions of what could be next for us.
            </p>
            <p className="text-medium">
              My methodology involves learning more about the customer, the business, the competitive landscape and the technological opportunities.
            </p>
            <p className="text-medium">
              To me product discovery is highly collaborative and, much like an app, often involves several different product areas and product owners. To achieve this I work with each individual product owner slightly differently.
            </p>
          </div>
          <div className="section-highlights lighter">
            <h1 className="subtitle-text"><em>#designsystems</em></h1>
            <h1 className="subtitle-text">
              From a grassroots movement to the product roadmap (almost)
            </h1>
            <p className="text-medium">
              We grew from 1 to 4 app teams, and doubled our headcount in design. An increased capacity comes with challenges. Working more deliberately with design systems is a great way to mitigate some of the challenges and support consistency and quality.
            </p>
            <p className="text-medium">
              Designers and developers previously maintained independent libraries. As a smaller team that worked fine, but it did not scale as we grew. Establishing a solid, shared, way of working with design systems would allow us as a team to build a consistent quality product faster.
            </p>
            <p className="text-medium">
              To get there we needed to organize from a grassroots movement in each competence, to a cross functional team with a spot in the product roadmap.
            </p>
            <p className="text-medium">
              To get there I did a number of things:
              <ul>
                <li>
                  Recruited allies
                </li>
                <li>
                  Audited our product
                </li>
                <li>
                  Communicate ambition and problem 
                </li>
                <li>
                  Carve out time from people’s schedules
                </li>
                <li>
                  Set up a backlog and plan our work
                </li>
                <li>
                  Engage product leadership
                </li>
              </ul>
            </p>
          </div>
        </section>
        <div class="v-spacing-large">
          <div class="column-6 justify-right responsive-resize">
            <h2 class="text-large">
              <em>My role was twofold. </em>
              In my product team I did explorations and visions for challenging
              things ahead. In the design team I worked with way of working and
              impact on the product.
            </h2>
            <p className="text-medium">
              I can’t share explorations or visions, but I can share some of the themes I worked with as the design team grew. I wanted to improve how we: Work, Best impact the product and Maintain consistency. Primarily through developing our rituals, how we work cross-functionally and how we work design systems.
            </p>
          </div>
        </div>
        <div class="v-spacing-large">
          <div class="column-6 responsive-resize">
            <h2 class="text-large">
              <em>Team building<br/></em>
              Onboarding, retros, goals, skill mapping, end-of-year ceremony
            </h2>
            <p className="text-medium">
              We grew during my time in the team. From experience of immense growth at Klarna, I know that growth requires work in order to fully reap the rewards of being more people. We have to put in work to maintain consistency. We have to put in work to grow together as a team, to form an identity and a voice.
            </p>
            <p className="text-medium">
              Our design team consisted of, at this point, 6 designers from 3 different companies.
            </p>
            <p className="text-medium">
              <em>The activity I’m most proud of</em> is the enhanced design on-boarding in general, and one part of it called “skill mapping” in particular.
            </p>
            <p className="text-medium">
              This was not only really appreciated, because it helped us get to know each other as designers and how we got in to the trade. But also because it became a useful tool when we allocate designers in the team planning.
            </p>
          </div>
        </div>
        <div class="v-spacing-large">
          <div class="column-6 justify-right responsive-resize">
            <h2 class="text-large">
              <em>Cross functional collaboration.<br/></em>
              Across competences, across employers.
            </h2>
            <p className="text-medium">
              Our collaboration with SEB is what we call a hybrid set up with mixed teams. The teams consist of both Bontouch, SEB and other consultancies.
            </p>
            <p className="text-medium">
              As a design lead I initiated routines to facilitate more cross functional collaboration. Some examples are:
              <ul>
                <li>
                  Involving Analytics and QA early on in the design phase, to get help building an understanding of where we’re at and what we know.
                </li>
                <li>
                  Arrange so that all new employees, regardless of role and competence, take part in a general design onboarding. This is intended to talk about our expectations on the design in the product, roughly how we work, and primarily who we are and what we do, to simply lower the bar for reaching out in the future.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="v-spacing-large flex spaceBetween">
          <div class="column-4 v-spacing-medium" style={{"min-width": 360 }}>
            <h2 class="text-large">
              <em>Discovery tab.<br /></em>
              New ways to present and work with content.
            </h2>
            <p className="text-medium">
              <ul>
                <li>
                  Lots of knowledge
                </li>
                <li>
                  With banking digitizing more and more, the personal opportunity to build a relationship is gone but not less important
                </li>
                <li>
                  In a digital world relationships are more transactional.
                </li>
              </ul>
            </p>
          </div>
          <div class="column-8" style={{"min-width": 640 }}>
            <img src={DiscoveryTabImageDM} />
          </div>
        </div>
        <div class="v-spacing-large flex spaceBetween">
          <div class="column-6">
            <div class="gradient-container">
              <p className="text-small">More tab after merge</p>
              <div class="column-8">
                <img src={MoreTabHeroDM} />
              </div>
            </div>
          </div>
          <div class="column-5 v-spacing-large">
            <h2 class="text-xlarge">
              <em>More tab.<br /></em>
              Merging two tabs into one.
            </h2>
            <p className="text-medium">
              The previous Tools and Support tabs both served as homes for various sporadically used features. There was a lack of strategy and holistic considerations behind what actually went in them. The new tab was made possible through moving features to more contextual homes and improving clarity for what was left.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seb;