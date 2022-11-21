import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="hero">
        <h1>
          Incubator <br /> Hub
        </h1>
        <img src="/hero-hen.png" alt="" />
        <p>Powered by The-labz.com</p>
      </section>
      <section className="moral">
        <h2 className="heading">MORAL OF THE STORY/MISSION</h2>
        <p>
          The Incubator Hub brings the best startup and newly launched crypto
          projects infront of potential investors and blockchain enthusiasts for
          an 'Ask Me Anything' style Chance to promote there project..
        </p>
        <p>
          All AMAs will be voice AMAs Carried out by experienced hosts and will
          be recorded and pinned in groups so you dont miss a thing, also guest
          speakers from the different chains are set to join us to keep everyone
          up to date on the latest chain updates
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
        <ul>
          <li>seed funding </li>
          <li>Full project Tech builds</li>
          <li>VC funding</li>
          <li>Project Delivery/Advisory</li>
        </ul>
      </section>
      <section className="traditional">
        <h2 className="heading">TRADITIONAL AMA LOUNGE WORKFLOW</h2>
        <ul>
          <li>
            lounge owners incentivise there audience with giveaways and promises
            of amazing projects through the door
          </li>
          <li>
            The lounges size generally dictates the AMA price they can charge a
            project
          </li>
          <li>The project pays, And books a slot , and the AMA takes place</li>
        </ul>
        <h3>AND THEN ???</h3>
        <p>
          THAT IS THE END OF THE PROJECTS JOURNEY WITH THE LOUNGE, HOPEFULLY
          THEY'VE PICK UP SOME INVESTMENT AND AWARENESS WHICH OF CAUSE IS
          CRUCIAL
        </p>
        <h4>Never put all your eggs in one basket "A crypto tale"</h4>
      </section>
      <section className="hub">
        <h2 className="heading">
          The Incubator Hub <br /> <span>(And How Were Different)</span>
        </h2>
        <ul>
          <li>
            lounge owners incentivise the group with giveaways and promises of
            amazing projects through the door
          </li>
          <li>
            The lounges size generally dictates the AMA price they can charge a
            project
          </li>
          <li>The project pays, And books a slot , and the AMA takes place</li>
        </ul>
        <h4>AND THEN ????</h4>
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
            Even an AMA client with a brilliant idea, a Pitch deck and team but
            ,,NO MONEY,,,, We ENROLL them into our 'Incubator' program where
            ONCE per month we CHOOSE one lucky project to recieve the 25k Seed
            Funding it takes to start the journey with the the-labz.com (subject
            to terms)
          </p>
        </div>
      </section>
      <section className="last">
        <h2 className="heading">
          The Incubator Hub <br /> <span>(And How Were Different)</span>
        </h2>
        <img src="/hero-hen.png" alt="" />
        <p>
          We help to incubate, launch and spread the word about new innovative
          projects to a growing community of intrigued investorson XRPL and BSC
        </p>
        <div className="partners">
          <h2>In partnership with</h2>
          <div className="row">
            <img src="/logo-white.png" alt="" />
            <img src="/trans shib.png" alt="" />
            <img src="/wagmi.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
