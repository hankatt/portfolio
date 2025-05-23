import '../App.css';
import './seb.css';
import HeroImage from '../img/case-seb-hero-1.png'
import DiscoveryTabImageDM from '../img/case-seb-discovery-tab-dm.png'
import DiscoveryTabImageLM from '../img/case-seb-discovery-tab-lm.png'
import MoreTabHeroDM from '../img/case-seb-more-tab-hero-dm.png'
import MoreTabToolsDM from '../img/case-seb-more-tab-tab-1-tools-dm.png'
import MoreTabSupportDM from '../img/case-seb-more-tab-tab-1-support-dm.png'
import ProlongHeroDM from '../img/case-seb-prolong-hero-dm.png'
import {
  Link
} from "react-router-dom";

function Seb() {
  return (
    <>
      <div id="seb">
        <div className="project-title-container flex flex-col">
            <h1 className="mega-title">SEB</h1>
            <section className="project-description v-spacing-medium column-6 responsive-resize flex-end">
              <h2 className="text-large">
                <em>Skandinaviska Enskilda Banken is one of the leading banks
                in the Nordics region.</em> On behalf of Bontouch/Framna I worked as a designer and design lead in a 
                mixed† team with their native app.
              </h2>
              <p className="project-description text-medium">
                †a team consisting of designers from Bontouch and SEB
              </p>
            </section>
        </div>
        <div className="v-spacing-large">
          <div className="hero-image">
            <img src={HeroImage} />
          </div>
        </div>
        <div className="section-title-container v-spacing-xlarge margin-center">
          <p className="text-small text-center medium-eyebrow-spacing">Part I</p>
          <p className="section-introduction subtitle-text">
            <em>Work with the design team.</em>
          </p>
        </div>
        <div className="v-spacing-xlarge flex flex-col">
          <div className="column-6 justify-right responsive-resize">
            <h2 className="text-large">
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
        <div className="v-spacing-large flex flex-col">
          <div className="column-6 flex-end responsive-resize">
            <h2 className="text-large">
              <em>Team building<br/></em>
              Onboarding, retros, goals, skill mapping, end-of-year ceremony, backlog.
            </h2>
            <p className="text-medium">
              We grew during my time in the team. From experience of immense growth at Klarna, I know that growth requires work in order to fully reap the rewards of being more people. We have to put in work to maintain consistency. We have to put in work to grow together as a team, to form an identity and a voice.
            </p>
            <p className="text-medium">
              Our design team consisted of, at this point, 6 designers from 3 different companies.
            </p>
            <p className="text-medium">
              <em className="highlight flex">The activity I’m most proud of is the enhanced design on-boarding in general, and one part of it called “skill mapping” in particular.</em>
            </p>
            <p className="text-medium">
              This was not only really appreciated, because it helped us get to know each other as designers and how we got in to the trade. But also because it became a useful tool when we allocate designers in the team planning.
            </p>
          </div>
        </div>
        <div className="v-spacing-large flex flex-col">
          <div className="column-6 justify-right responsive-resize">
            <h2 className="text-large">
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
        <div className="section-title-container v-spacing-xlarge margin-center">
          <p className="text-small text-center medium-eyebrow-spacing">Part II</p>
          <p className="section-introduction subtitle-text">
            <em>Work on features.</em>
          </p>
        </div>
        <div className="v-spacing-xlarge flex discovery-tab gap-large spaceBetween no-col-space">
          <div className="column-5 v-spacing-medium center">
            <h2 className="text-large">
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
          <div className="column-9 discovery-tab-image">
            <img src={DiscoveryTabImageDM} />
          </div>
        </div>
        <div className="v-spacing-xlarge flex wrap spaceEvenly more-tab">
          <div className="column-5 v-spacing-large order-2 more-tab-col-1">
            <h2 className="text-xlarge">
              <em>More tab.<br /></em>
              Merging two tabs into one.
            </h2>
            <p className="text-medium">
              The previous Tools and Support tabs both served as homes for various sporadically used features. There was a lack of strategy and holistic considerations behind what actually went in them. The new tab was made possible through moving features to more contextual homes and improving clarity for what was left.
            </p>
          </div>
          <section className="scroll-gallery spaceBetween gap-large order-2">
            <div className="column-5 order-1 more-tab-col-2">
                <div className="gradient-container">
                  {/* <p className="text-small">More tab after merge</p> */}
                  <div className="text-center">
                    <h2 className="text-small">
                      <em>The new tab<br /></em>
                      With clearer sections
                    </h2>
                  </div>
                  <div className="column-8">
                    <img src={MoreTabHeroDM} />
                  </div>
                </div>
              </div>
              <div className="column-3 gap-medium v-spacing-large order-4 more-tab-col-4">
              <div className="text-center">
                <h2 className="text-small">
                  <em>Tools tab pre merge<br /></em>
                  4 new features moved out
                </h2>
              </div>
              <img src={MoreTabToolsDM} />
            </div>
            <div className="column-3 gap-medium v-spacing-large order-5 more-tab-col-5">
              <div className="text-center">
                <h2 className="text-small">
                  <em>Support tab pre merge<br /></em>
                  No features moved
                </h2>
              </div>
              <img src={MoreTabSupportDM} />
            </div>
        </section>
          <div className="column-5 order-1 more-tab-col-2">
            <div className="gradient-container">
              {/* <p className="text-small">More tab after merge</p> */}
              <div className="text-center">
                <h2 className="text-small">
                  <em>The new tab<br /></em>
                  With clearer sections
                </h2>
              </div>
              <div className="column-8" style={{ "position": "relative", "top": "calc(-2* clamp(30px, 7vw, 100px))", "margin-bottom": "calc(-.125* clamp(50px, 7vw, 100px))" }}>
                <img src={MoreTabHeroDM} />
              </div>
            </div>
          </div>
          <div className="column-4 v-spacing-small order-3 more-tab-col-3">
            <div>
              <h2 className="text-medium">
                <em>The starting point<br /></em>
                Tools and Support listed a lot of mixed functionality and the idea of merging felt unreasonable at first.
              </h2>
              <p className="text-small">
                To tackle that we wanted deliberate groupings that we could put a title on, and we wanted to move out functionality to more contextual locations.
              </p>
              <p className="text-small">
                To evaluate the impact of our decisions we leveraged customer support, reviews, analytics, interviews.
              </p>
              <p className="text-small">
                We also considered more long-term product ambitions to make sure some of the structural changes we made would help evolve the product down-the-line, and help customers understand the product’s evolution.
              </p>
            </div>
          </div>
          <div className="column-3 gap-medium v-spacing-small order-4 more-tab-col-4">
            <div className="text-center">
              <h2 className="text-small">
                <em>Tools tab pre merge<br /></em>
                4 new features moved out
              </h2>
            </div>
            <img src={MoreTabToolsDM} />
          </div>
          <div className="column-3 gap-medium v-spacing-small order-5 more-tab-col-5">
            <div className="text-center">
              <h2 className="text-small">
                <em>Support tab pre merge<br /></em>
                No features moved
              </h2>
            </div>
            <img src={MoreTabSupportDM} />
          </div>
        </div>
        {/* <section className="scroll-gallery spaceBetween gap-large">
          <div className="column-5 order-1 more-tab-col-2">
            <div className="gradient-container">
              <div className="text-center">
                <h2 className="text-small">
                  <em>The new tab<br /></em>
                  With clearer sections
                </h2>
              </div>
              <div className="column-8">
                <img src={MoreTabHeroDM} />
              </div>
            </div>
          </div>
          <div className="column-3 gap-medium v-spacing-large order-4 more-tab-col-4">
              <div className="text-center">
                <h2 className="text-small">
                  <em>Tools tab pre merge<br /></em>
                  4 new features moved out
                </h2>
              </div>
              <img src={MoreTabToolsDM} />
            </div>
            <div className="column-3 gap-medium v-spacing-large order-5 more-tab-col-5">
              <div className="text-center">
                <h2 className="text-small">
                  <em>Support tab pre merge<br /></em>
                  No features moved
                </h2>
              </div>
              <img src={MoreTabSupportDM} />
            </div>
        </section> */}
        {/* <div className="v-spacing-large flex gap-large spaceBetween no-col-space case-prolong">
          <div className="column-7" style={{ "min-width": "calc(640px - 14vw)" }}>
            <img src={ProlongHeroDM} />
          </div>
          <div className="column-5 v-spacing-small center">
            <h2 className="text-large">
              <em>Prolong mortgages in the app.<br /></em>
              No more paper waste, no more waiting.
            </h2>
            <p className="text-medium">
              I worked with the the Business manager for mortgages and one of their tech leads to define the experience, while continuously syncing the work the SEB web team. It was particularly important that the experience is identical across all channels.
            </p>
            <p className="text-medium">
              New design elements were introduced with the design system in mind, meaning they were designed to be reusable and add value in several parts of the app, in an incremental way.
            </p>
          </div>
        </div> */}
        <div className="section-title-container v-spacing-xlarge margin-center">
          <p className="text-small text-center medium-eyebrow-spacing">Part III</p>
          <p className="section-introduction subtitle-text">
            <em>Work on processes.</em>
          </p>
        </div>
        <section className="flex-col v-spacing-xlarge">
          <div className="section-highlights flex-end">
            <h1 className="subtitle-text"><em>Product discovery.</em></h1>
            <h1 className="subtitle-text">
              A deep-dive on how I approach problems and goals with lots of unknowns.
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
            <h1 className="subtitle-text"><em>Design systems.</em></h1>
            <h1 className="subtitle-text">
              A deep-dive on learnings from taking our grassroots movement to the product roadmap.
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
      </div>
    </>
  );
}

export default Seb;