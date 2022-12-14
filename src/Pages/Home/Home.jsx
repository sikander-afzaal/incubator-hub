import {
  faFacebook,
  faMedium,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <div className="social-top">
        <a href="https://linktr.ee/incubator_hub" target={"blank"}>
          <img src="/link-tree.svg" alt="" />
        </a>
        <a href="https://twitter.com/the_incubator_" target={"blank"}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://medium.com/@info_63653" target={"blank"}>
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCJa5p0NZB5EEe8zXi9Qv4WQ"
          target={"blank"}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.facebook.com/groups/1154911348475503"
          target={"blank"}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <section className="hero">
        <Fade top>
          <h1>
            Incubator <br /> Hub
          </h1>
        </Fade>
        <Fade delay={500}>
          <img src="/hero-hen.png" alt="" />
        </Fade>
        <Fade bottom>
          <p>Powered by The-labz.com</p>
        </Fade>
      </section>
      <section className="moral">
        <Fade top>
          <h2 className="heading">MORAL OF THE STORY/MISSION</h2>
        </Fade>
        <Fade left duration={1000} delay={300}>
          <p>
            The Incubator Hub brings the best startup and newly launched crypto
            projects infront of potential investors and blockchain enthusiasts
            for an 'Ask Me Anything' style Chance to promote there project..
          </p>
          <p>
            All AMAs will be voice AMAs Carried out by experienced hosts and
            will be recorded and pinned in groups so you dont miss a thing, also
            guest speakers from the different chains are set to join us to keep
            everyone up to date on the latest chain updates
          </p>
          <p>
            WE ARE THE 1ST AMA LOUNGE Exclusively built for the XRPL and BSC
            communities
          </p>
          <p>
            WE ARE THE 1ST AMA LOUNGE who partnered with a TECH BUILD GIANT to
            create <br /> AN INCUBATOR HUB thanks to our partnership with
            The-Labz.com
          </p>
        </Fade>

        <ul>
          <Fade bottom duration={1000} delay={400}>
            <li>seed funding </li>
            <li>Full project Tech builds</li>
            <li>VC funding</li>
            <li>Project Delivery/Advisory</li>
          </Fade>
        </ul>
      </section>
      <section className="traditional">
        <Fade top>
          <h2 className="heading">TRADITIONAL AMA LOUNGE WORKFLOW</h2>
        </Fade>
        <ul>
          <Fade left duration={1000} delay={300}>
            <li>
              lounge owners incentivise there audience with giveaways and
              promises of amazing projects through the door
            </li>
            <li>
              The lounges size generally dictates the AMA price they can charge
              a project
            </li>
            <li>
              The project pays, And books a slot , and the AMA takes place
            </li>
          </Fade>
        </ul>
        <Fade delay={500} bottom>
          <h3>AND THEN ???</h3>
        </Fade>
        <Fade delay={800}>
          <p>
            THAT IS THE END OF THE PROJECTS JOURNEY WITH THE LOUNGE, HOPEFULLY
            THEY'VE PICK UP SOME INVESTMENT AND AWARENESS WHICH OF CAUSE IS
            CRUCIAL
          </p>
          <h4>Never put all your eggs in one basket "A crypto tale"</h4>
        </Fade>
      </section>
      <section className="hub">
        <Fade top>
          <h2 className="heading">
            The Incubator Hub <br /> <span>(And How Were Different)</span>
          </h2>
        </Fade>
        <ul>
          <Fade left duration={1000} delay={300}>
            {" "}
            <li>
              lounge owners incentivise the group with giveaways and promises of
              amazing projects through the door
            </li>
            <li>
              The lounges size generally dictates the AMA price they can charge
              a project
            </li>
            <li>
              The project pays, And books a slot , and the AMA takes place
            </li>
          </Fade>
        </ul>
        <Fade bottom delay={500}>
          <h4>AND THEN ????</h4>
        </Fade>
        <Fade bottom delay={800}>
          <div className="flex-row">
            <FontAwesomeIcon icon={faCheck} />
            <p>
              The project has direct contact with The-labz.com who has now built
              up a network of 500+ developers
            </p>
          </div>
          <div className="flex-row">
            <FontAwesomeIcon icon={faCheck} />
            <p>
              IF projects need VC funding, they need to be ready!! Our 'Venture
              Labz' service does exactly that, commercial analysis, Pitch deck
              rebuild, warm VC intros
            </p>
          </div>
          <div className="flex-row">
            <FontAwesomeIcon icon={faCheck} />
            <p>
              'The-Labz.com specialises in Tech Builds On Every Chain, Inc large
              metaverse builds, pitch decks on request
            </p>
          </div>
          <div className="flex-row">
            <FontAwesomeIcon icon={faCheck} />
            <p>
              Even an AMA client with a brilliant idea, a Pitch deck and team
              but ,,NO MONEY,,,, We ENROLL them into our 'Incubator' program
              where ONCE per month we CHOOSE one lucky project to recieve the
              25k Seed Funding it takes to start the journey with the
              the-labz.com (subject to terms)
            </p>
          </div>
        </Fade>
      </section>
      <section className="last">
        <Fade top>
          <h2 className="heading">The Incubator Hub</h2>
        </Fade>
        <Fade>
          <img src="/hero-hen.png" alt="" />
        </Fade>
        <Fade>
          <p>
            We help to incubate, launch and spread the word about new innovative
            projects to a growing community of intrigued investorson XRPL and
            BSC
          </p>
        </Fade>
        <div className="partners">
          <Fade top>
            <h2>In partnership with</h2>
          </Fade>
          {window.innerWidth > 650 ? (
            <Fade bottom>
              <div className="row">
                <a href="https://the-labz.com" target={"blank"}>
                  <img src="/logo-white.png" alt="" />
                </a>
                <a href="https://shibanft.co.uk" target={"blank"}>
                  <img src="/trans shib.png" alt="" />
                </a>
                <a href="https://wagmilabz.com" target={"blank"}>
                  <img src="/wagmi.png" alt="" />
                </a>
              </div>
            </Fade>
          ) : (
            <div className="row">
              <Fade left cascade>
                <a href="https://the-labz.com" target={"blank"}>
                  <img src="/logo-white.png" alt="" />
                </a>
                <a href="https://shibanft.co.uk" target={"blank"}>
                  <img src="/trans shib.png" alt="" />
                </a>
                <a href="https://wagmilabz.com" target={"blank"}>
                  <img src="/wagmi.png" alt="" />
                </a>
              </Fade>
            </div>
          )}
        </div>
      </section>
      <Link className="blog-heading heading" to="/blogs">
        Blogs
      </Link>
      <div className="contact">
        <h2 className="heading">Contact Details</h2>
        <a href="mailto:Info@incubator-hub.com">Info@incubator-hub.com</a>
      </div>
    </div>
  );
}

export default Home;
