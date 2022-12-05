import "./Blogs.css";
import BlogComp from "../../Components/BlogComp/BlogComp";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="blogs">
      <Link to="/" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1>Blogs</h1>
      <div className="blog-grid">
        <BlogComp
          img="/blog1.png"
          url="blog1"
          title="How The Labz are emerging as the go-to Tech builder in the Web3 sphere"
          desc="The Labz are catalyzing the adoption of blockchain technology and Web3 infrastructure at scale through building cutting-edge decentralized ecosystems and product builds."
          writer="LABZ"
          date="1 HOUR AGO"
        />
        <BlogComp
          img="/blog2.png"
          url="blog2"
          title="Incubator Hub: The XRPL network has established its first AMA Lounge"
          desc="This AMA Lounge will provide comprehensive daily news sources from start-up projects on the network and beyond."
          writer="LABZ"
          date="1 HOUR AGO"
        />
        <BlogComp
          img="/blog3.jpg"
          url="blog3"
          title="Incubator Hub: just one week since it's inception and leaked plans for passive income generating NFT collection release from the-labz and Wagmilabz.com as the hub hits over 1300 members"
          desc="It’s been 7 days since the links were made available to the public to join the telegram group targeting fans of the XRPL and BSC community projects , for the free ..."
          writer="LABZ"
          date="1 HOUR AGO"
        />
        <BlogComp
          img="/blog4.jpg"
          url="blog4"
          contain
          title="KyotoProtocol.io launches its new decentralised exchange, KyotoSwap.io"
          desc="KyotoProtocol.io has recently been working on acquiring and building their new decentralised exchange (DEX) and has done nothing short of providing their project and community with the consistency of adapting, acquiring and building products that will have a forever lasting Impact within their ecosystem."
          writer="LABZ"
          date="1 HOUR AGO"
        />
      </div>
    </div>
  );
};

export default Blogs;
