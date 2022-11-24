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
      </div>
    </div>
  );
};

export default Blogs;
