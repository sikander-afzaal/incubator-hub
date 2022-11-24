import "./BlogDetail.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <div className="blogWrapper">
      <Link to="/blogs" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="blogDetail">
        <h1>
          How The Labz are emerging as the go-to Tech builder in the Web3 sphere
        </h1>
        <h2>
          By: <strong>LABZ</strong>
        </h2>
        <img src="/blog1.png" alt="" />
        <p>
          The Labz are catalyzing the adoption of blockchain technology and Web3
          infrastructure at scale through building cutting-edge decentralized
          ecosystems and product builds.
        </p>
        <p>
          The NFT Industry has started to show obvious signs of maturation. From
          being the art-dependent craze at the start of 2021 to now moving onto
          real-life use cases and utility.
        </p>
        <p>
          Due to the ease of creation and amounts of collections now available
          for sale, it's inevitable that only those with significant benefits to
          the buyer will still be around and last the distance
        </p>
        <p>
          The Chief Executive Officer of{" "}
          <a
            href="https://The-Labz.com"
            target={"blank"}
            style={{ color: "black" }}
          >
            The-Labz.com
          </a>{" "}
          commented “In line with our beliefs of blockchain being inclusive and
          beneficial not exclusive and unattainable, The Labz is to be
          unleashing the capabilities of future technologies into project
          start-ups business and to provide a holistic end-to-end blockchain
          architecture framework to assist projects in the initial stages of
          their Web3 strategy”
        </p>
        <p>
          In line with The Labz’s mission of mass adoption, the Web3 ecosystem
          builder platform will be releasing 10,000 unique NFTs, representing
          different professor characters, with over 250 artisanal traits; for
          free
        </p>
        <p>
          The CEO of The Labz further explains, “Holders of the collection will
          be provided with exclusive access to the technology and professional
          network The Labz has access to; whether you’re a project/business
          start up in the Web3 space or an established in-real-life business
          operating in the Web2 space; we, The Labz, through the NFT collection
          will progress the Web3 strategy of the project”.
        </p>
        <p>
          As a Web3 ecosystem building platform, The Labz have collaborated with
          numerous projects spanning from the renewable energy and carbon offset
          sector to NFT projects developing GameFi platforms and bringing tier
          “IRL” artists, musicians and athletes into the metaverse.
        </p>
        <p>
          The-Labz specializes in end-to-end project/product development, with a
          robust delivery network that are well-versed in a multitude of
          technology stacks and blockchain. The Labz’s product ecosystem builds
          span from:
        </p>
        <ul>
          <li> - Email to Wallet Integration</li>
          <li>- Decentralised Exchanges (DEXs)</li>
          <li>- Payment Gateways </li>
          <li>- Open / Closed NFT Marketplaces</li>
          <li>- Entire NFT Collection Creations</li>
          <li>- Token Contracts / Tokenomics development</li>
          <li>- Custom Smart Contract development</li>
          <li>- Entire Metaverse development</li>
        </ul>
        <p>
          To claim a free unique professor, visit{" "}
          <a
            href="http://wagmilabz.com"
            target={"blank"}
            style={{ color: "black" }}
          >
            wagmilabz.com
          </a>{" "}
          and look out for the ‘mint free professor’ tab. They will need their
          unique code, but there will be a link to the telegram group to grab
          one free per wallet.
        </p>
        <p>
          The collection launch date is set for NOV 26th at 1 pm BST. These NFTs
          come with a host of free utilities.
        </p>
        <p>
          For more information about ‘The Labz, ’ visit{" "}
          <a
            href="https://the-labz.com"
            target={"blank"}
            style={{ color: "black" }}
          >
            https://the-labz.com
          </a>{" "}
          , Or send an email to{" "}
          <a
            href="mailto:info@the-labz.com"
            target={"blank"}
            style={{ color: "black" }}
          >
            info@the-labz.com
          </a>
          .
        </p>
        <div className="mediaContact">
          <h4>Media Contact</h4>
          <h5>
            Company Name: <strong> Incubator Hub</strong>
          </h5>
          <h5>
            Contact Person: <strong>D. Jones</strong>{" "}
          </h5>
          <h5>
            Email:{" "}
            <strong>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="mailto:info@incubator-hub.com"
              >
                info@incubator-hub.com
              </a>
            </strong>{" "}
          </h5>
          <h5>
            Website:{" "}
            <strong>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="www.incubator-hub.com"
              >
                www.incubator-hub.com
              </a>
            </strong>
          </h5>
          <h5>
            {" "}
            City: <strong>Derby</strong>
          </h5>
          <h5>
            Country: <strong>UK</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
