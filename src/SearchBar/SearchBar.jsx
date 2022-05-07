import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [sex, setSex] = useState("");
  return (
    <>
      <div className="main-nav-container">
        <div className="nav">
          <div className="imgc">
            <img
              className="imcd"
              src="https://content.couponspy.in/public/shop/240.jpg"
              alt=""
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="text here"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div className="btn">
            <button>{sex === "somesh" ? "Mad" : "Search"}</button>
            <input type="text" value={sex} />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SearchBar;
