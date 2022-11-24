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
          img="/blog-test.jpg"
          title="First time Bear market? Advice from Bitcoin Bull Michael Saylor"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae illum sed, adipisci mollitia optio repellendus autem repellat non nam quia."
          writer="Joseph Hall"
          date="1 HOUR AGO"
        />
        <BlogComp
          img="/blog-test.jpg"
          title="First time Bear market? Advice from Bitcoin Bull Michael Saylor"
          desc="Lorem Ipsum"
          writer="Joseph Hall"
          date="1 HOUR AGO"
        />
        <BlogComp
          img="/blog-test.jpg"
          title="First time Bear market? Advice from Bitcoin Bull Michael Saylor"
          desc="Lorem Ipsum"
          writer="Joseph Hall"
          date="1 HOUR AGO"
        />
        <BlogComp
          img="/blog-test.jpg"
          title="First time Bear market? Advice from Bitcoin Bull Michael Saylor"
          desc="Lorem Ipsum     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae illum sed, adipisci mollitia optio repellendus autem repellat non nam quia."
          writer="Joseph Hall"
          date="1 HOUR AGO"
        />
      </div>
    </div>
  );
};

export default Blogs;
