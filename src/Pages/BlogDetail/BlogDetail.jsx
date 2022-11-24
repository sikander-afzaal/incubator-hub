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
        <h1 className="pop">
          First time Bear market? Advice from Bitcoin Bull Michael Saylor
        </h1>
        <h2 className="pop">
          By: <strong className="pop">Joseph Hall</strong>
        </h2>
        <img src="/blog-test.jpg" alt="" />
        <p className="pop">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          perferendis consectetur soluta sapiente laboriosam atque porro
          adipisci nobis! Quos, quibusdam.
        </p>
        <p className="pop">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          perferendis consectetur soluta sapiente laboriosam atque porro
          adipisci nobis! Quos, quibusdam.
        </p>
        <p className="pop">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          perferendis consectetur soluta sapiente laboriosam atque porro
          adipisci nobis! Quos, quibusdam.
        </p>
        <p className="pop">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          perferendis consectetur soluta sapiente laboriosam atque porro
          adipisci nobis! Quos, quibusdam.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
