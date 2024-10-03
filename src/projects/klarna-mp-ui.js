import '../App.css';
import './klarna-mp-ui.css'
// import KLARNAImage from '../img/KLARNA.png'
import HeroMPOldImage from '../img/case-mpds-product-old-1.png'
import HeroMPNewImage from '../img/case-mpds-product-new-1.png'
import HeroFiltersWrapper from '../img/case-mpds-filters-wrapper-1.png'
import HeroResponsiveTables from '../img/case-mpds-responsive-tables-1.png'
import HeroAlignedDropdowns from '../img/case-mpds-aligned-dropdowns-1.png'
import HeroDecoupledOptions from '../img/case-mpds-decoupled-options-1.png'
import HeroEnhancedInputs from '../img/case-mpds-enhanced-inputs-1.png'
import HeroNextStep from '../img/case-mpds-next-step-1.png'
import IconChevronBack from '../assets/chevron-back.svg'
import { Link } from "react-router-dom";
  
function KlarnaMPUI() {
  return (
    <>
      <section className="row v-spacing-large center">
        <div className="column-6 text-center">
          <h1 className="hero-title">Merchant Portal</h1>
          <p className="text-medium faded">
            Merchant Portal helps small- and medium-sized merchants manage their relationship with Klarna. <em>When I left I had worked with the overall design direction and led its responsive Design System for two years.</em>
          </p>
        </div>
      </section>
      <div className="section-hero-container">
        <div className="hero-image first">
          <img src={HeroMPOldImage} />
        </div>
        <div className="hero-image second">
          <img src={HeroMPNewImage} />
        </div>
      </div>
      <div className="project-tag-container">
      <p className="tag body-text">
          Visual Design
        </p>
        <p className="tag body-text">
          Design System
        </p>
        <p className="tag body-text">
          React
        </p>
        <p className="tag body-text">
          Documentation
        </p>
      </div>
      {/* <div className="section-title-container margin-center">
        <p className="section-introduction subtitle-text faded">
          When I started it was a basic order management tool. <em>I soon got to lead a huge product discovery effort to define and design a vision for it.</em> And over the years I had the privilege to realize a lot of it.
        </p>
      </div> */}
      <div className="section-title-container margin-center">
        <p className="text-small faded text-center medium-eyebrow-spacing">Mission</p>
        <h1 className="text-large text-center">
          Dozens of teams publish their product in the portal.
          <em> To enable consistency, a smooth rebranding and a responsive design we worked innovatively with design systems, together with designers and developers across all the teams.</em>
        </h1>
        {/* <p className="section-introduction body-text faded">
          To mitigate design inconsistencies and increase quality, I designed and helped implement components that systematized shared needs. This helped product teams achieve a reliable UI faster and functioned as a tool for managing and maintaining interfaces as well as product and brand alignment.
        </p> */}
      </div>
      <section className="flex-col v-spacing-large">
        <div className="section-highlights">
          <h1 className="faded subtitle-text">#innovation #front-end</h1>
          <h1 className="subtitle-text">
            I implemented gap, before gap came to Flexbox.
          </h1>
          <p className="text-medium faded">
            When engineers implemented responsive designs we noticed they struggled with content that wraps. We wanted something to provide space between elements as they wrap, but at the same time not interfere with the expected rendering. At this point Flex had no way to manage column gaps. I implemented a workaround that allowed us to do this, and about a year later gap came Flex and we could replace my workaround seamlessly. I’m proud of this because it confirms that the workarounds I pushed for did fill a legit gap in the industry tooling, and allowed us to meanwhile provide simpler tooling for a year longer than we would’ve otherwise.
          </p>
        </div>
        <div className="section-highlights lighter flex-end">
          <h1 className="faded subtitle-text">#innovation #front-end</h1>
          <h1 className="subtitle-text">
            Responsive design not based on device but based on @container
          </h1>
          <p className="text-medium faded">
            Typically responsive design revolves around the mobile, tablet and desktop sizes. I think this line is blurring and it is not optimal to make layout decisions this way. I refer to my approach as device-agnostic design. Using React Context we give our components a way to render based on the space they're given, regardless of device. This exists as @container queries, but browser support then was not sufficient for us.
          </p>
        </div>
      </section>
      <div className="section-title-container margin-center">
        <p className="section-introduction subtitle-text faded">
          <em>Below is a selection of the most impactful componentizations.</em> It's based on where we saw teams struggle, what was interacted with mostly, and involved the biggest room for interpretation.
        </p>
      </div>
      <section className="row v-spacing-large">
        <div className="column-12 custom-offset-filters-image">
          <img src={HeroFiltersWrapper} className="section-image" />
        </div>
      </section>
      <section className="row v-spacing-small v-spacing-medium-bottom">
        <div className="column-6 mbp-767-filters-col-1">
          <h1 className="text-large">Filters, consistently, everywhere.</h1>
          <h1 className="faded text-large">The most core of functionalities, responsive.</h1>
          <p className="body-text faded">
            This component is different in the sense that it is more of a layout manager than a typical UI component that handles user interaction. The Filters wrapper provides behaviour and customization so that developers easily can achieve the designs designers have in their disposal toolbox.
          </p>
          <p className="body-text faded">
            The wrapper enables an array of modes to manage all kinds of responsive behaviour, but defaults to the horizontal filters row and collapses to a single button when the filters no longer fit.
          </p>
          <p className="body-text faded">
            The vertical mode used in for example the pop-out to the right on the tablet also enables side-by-side layouts on desktop.
          </p>
          <p className="body-text faded">
            The collapsing of all filter options into a Filters button is customizable to be triggered at any given width or breakpoint.
          </p>
          <p className="body-text faded"> 
            The mobile layout reuses the pop-out from the tablet but snaps it to the bottom of the screen and limits its height to a default value with the option to override. It’s capped to maintain the visibility of tapped elements.
          </p>
        </div>
      </section>

      <section className="row v-spacing-large mbp-767">
        <div className="column-5 mbp-767-dropdowns-col-2">
          <img src={HeroAlignedDropdowns} />
        </div>
        <div className="column-7 mbp-767-dropdowns-col-1">
          <h1 className="text-large">Drop-downs, beyond native.</h1>
          <h1 className="faded text-large">Multiselection and cross-platform support.</h1>
          <p className="body-text faded">
            We were particularly cautious with these to avoid issues, since we were replacing native functionality. One significant accessibility effort was ensuring that keyboard-navigation remained intact.
          </p>
          <p className="body-text faded">
            User needs like multi-selection, searching among options, select all, are all examples of why we had to move beyond the native dropdowns.
          </p>
        </div>
      </section>
     
      <section className="row no-gap v-spacing-large v-spacing-small-bottom">
        <div className="column-5 custom-offset-5-text mbp-767-custom-offset-5-text mbp-1023-custom-offset-5-text">
          <h1 className="text-large">Decoupled options.</h1>
          <h1 className="faded text-large">A dynamic foundation for the unpredictable.</h1>
          <p className="body-text faded">
            When creating the drop-down panel (options panel) we defaulted to rendering our drop-down inputs with it. These input fields triggered the panel and then updated based on selections.
          </p>
          <p className="body-text faded">
            It fell short as I realized that some use-cases required a more refined visual hierarchy, and these inputs have a fairly large footprint.
          </p>
          <p className="body-text faded">
            We still kept them as the default but we wanted it to be easy for developers to trigger the options panel from a different UI element than the drop-down, say a button for example.
          </p>
          <p className="body-text faded">
            We experimented with passing in a preferred type as a prop and then render the preferred component in its place. This did not fly. We’d need to manage the interaction, data passage and state between the triggering element (trigger) and the options panel ourselves for each new trigger someone comes up with.
          </p>
          <p className="body-text faded">
            This led me to propose an implementation that would let developers pick any UI element and trigger the options panel from their element of choosing, and the options panel would return its state so that the developer could update the state of the trigger as seen fit.
          </p>
          <p className="body-text faded">
            This concept was how we finally implemented the component in our component library. It was exciting to have UI design needs inspire a software design pattern that ended up improving our final solution.
          </p>
        </div>
        <div className="column-7 custom-offset-5-image mbp-767-custom-offset-5-image">
          <img src={HeroDecoupledOptions} />
        </div>
      </section>
      
      <section className="row v-spacing-large">
        <div className="column-12 custom-offset-6-image custom-offset-image-6-tables">
          <img src={HeroResponsiveTables} className="section-image" />
        </div>
      </section>

      <section className="row v-spacing-small mbp-720">
        <div className="column-6 mbp-720-col-1"></div>
        <div className="column-6 mbp-720-col-2 custom-offset-6-text">
          <h1 className="text-large">Responsive tables</h1>
          <h1 className="faded text-large">Plug-and-play through simple defaults, but rich customization.</h1>
          <p className="body-text faded">
            Many teams need to provide a lot of data but lack resources both in design and in front-end, but they still had to find a way of doing it. This led to an inconsistent Merchant Portal, both in design and implementation.
          </p>
          <p className="body-text faded">
            This need was mainly met through tables. These tables make up a significant part of the user experience and as such, was a great candidate for our Design System team to refine and componetize. This component significantly raised the visual and user experience in the product, and most of all saved teams loads of time.
          </p>
          <p className="body-text faded">
            This component was also one of the biggest challenges in making the Merchant Portal responsive. If we solved this, it was all downhill from here.
          </p>
        </div>
      </section>

      <section className="row v-spacing-xlarge mbp-767">
        <div className="column-6 mbp-767-inputs-col-1">
          <h1 className="text-large">Enhancing our inputs.</h1>
          <h1 className="faded text-large">Input chips and a consistent footprint.</h1>
          <p className="body-text faded">
            Some teams need to trigger the Search manually. I added the button inside of the search field. This allows teams to simply “turn it on” without any layout implications, since the field maintains its footprint.
          </p>
          <p className="body-text faded">
            Input chips were designed to batch manage users. End-users often had lists of e-mails that they wanted to manage. The Chip input field parses, inline validates and chips the pasted content.
          </p>
        </div>
        <div className="column-6 mbp-767-inputs-col-2">
          <img src={HeroEnhancedInputs} className="custom-offset-inputs-image" />
        </div>
      </section>
      <div className="section-title-container margin-center">
        <p className="text-small faded text-center medium-eyebrow-spacing">Final words</p>
        <p className="section-introduction subtitle-text faded">
          <em>An insane amount of love went in to the shell of the portal and the grid it builds upon.</em> The grid is actually fundamental to our responsive components and modules. It allowed us to do @container queries before container queries were widely supported.
        </p>
      </div>
      <div className="section-title-container margin-center v-spacing-xlarge">
        <p className="section-introduction eyebrow-text faded">
          <em>A glimpse of the future.</em>
        </p>
      </div>
      <section className="row v-spacing-small v-spacing-large-bottom">
        <div className='column-12'>
          <img src={HeroNextStep} />
        </div>
      </section>

    </>
  );
}

export default KlarnaMPUI;