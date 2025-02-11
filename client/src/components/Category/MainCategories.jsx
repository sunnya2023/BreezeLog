import React from "react";
import "./maincategory.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const MainCategories = () => {
  return (
    <div className="maincategory">
      <div className="links">
        <Link to="/" className="nowrap active">
          All Posts
        </Link>
        <Link to="/" className="nowrap">
          Development
        </Link>
        <Link to="/" className="nowrap">
          Database
        </Link>
        <Link to="/" className="nowrap">
          Web Design
        </Link>
        <Link to="/" className="nowrap">
          Search Engines
        </Link>
        <Link to="/" className="nowrap">
          Marketing
        </Link>
      </div>
      <span className="boundary">│</span>
      <div className="search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="search a post..." />
      </div>
    </div>
  );
};

export default MainCategories;
