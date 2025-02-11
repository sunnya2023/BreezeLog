import "./featuredPosts.scss";
import Image from "../Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="featuredPost">
      <div className="main-section">
        <div className="postList">
          <Image
            src="default-image.jpg"
            alt="post-image"
            className="post-img"
          />
          <div className="details">
            <div className="details-top">
              <h1>01.</h1>
              <Link to="/">Web Design</Link>
              <span className="date">2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="sub-section">
        <div className="postList">
          <Image src="default-image.jpg" alt="post-image" />
          <div className="details">
            <div className="details-top">
              <h1>02.</h1>
              <Link to="/">Web Design</Link>
              <span className="date">2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="postList">
          <Image src="default-image.jpg" alt="post-image" />
          <div className="details">
            <div className="details-top">
              <h1>03.</h1>
              <Link to="/">Web Design</Link>
              <span className="date">2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="postList">
          <Image src="default-image.jpg" alt="post-image" />
          <div className="details">
            <div className="details-top">
              <h1>04.</h1>
              <Link to="/">Web Design</Link>
              <span className="date">2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
