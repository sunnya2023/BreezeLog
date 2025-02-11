import React from "react";
import { Link } from "react-router-dom";
import "./../style/page/homePage.scss";

import { FaRegPenToSquare } from "react-icons/fa6";
import MainCategories from "../components/Category/MainCategories";
import FeaturedPosts from "../components/Post/FeaturedPosts";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="direction">
        <Link to="/">Home</Link>
        <span>·</span>
        <span className="text-blue">Blogs and Articles</span>
      </div>

      <div className="head-section">
        <div className="title">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab
            temporibus voluptatibus ea. Sapiente, ea optio! Quae delectus ut
            harum.
          </p>
        </div>
        <Link to="write" className="write">
          {/* <svg viewBox="0 0 200 200" width={200} height={200}>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75, 75 0 1,1 150 , 0 a 75, 75 0 1, 1 -150 , 0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story·
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Write your story·
              </textPath>
            </text>
          </svg> */}
          <FaRegPenToSquare className="write-icon" />
          <span className="nowrap">Write your story</span>
        </Link>
      </div>

      <MainCategories />
      <FeaturedPosts />
    </div>
  );
};

export default Homepage;
