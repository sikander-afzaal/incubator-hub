import { Link } from "react-router-dom";
import "./BlogComp.css";

const BlogComp = ({ date, img, desc, title, writer, url }) => {
  return (
    <Link to={`/blogs/${url}`} className="blog-box">
      <img src={img} alt="" />
      <h3 className="pop">{title}</h3>
      <p className="pop">{desc}</p>
      <div className="bottom-blog">
        <h4 className="pop">
          by <span className="pop">{writer}</span>
        </h4>
        <h5 className="pop">{date}</h5>
      </div>
    </Link>
  );
};

export default BlogComp;
