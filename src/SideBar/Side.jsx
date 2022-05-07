import React, { useState } from "react";
import "./Side.scss";
import { minPrice, maxPrice } from "./sidebarconst";

const Side = (props) => {
  const [minOption, setMinOption] = useState(minPrice);
  const [maxOption, setMaxOption] = useState(maxPrice);
  return (
    <div className="main">
      <div>
        <b>Filter</b>
      </div>
      <div>
        <b>Category</b>
        <div>
          <pre>&#9001; Mobile Accessories</pre>{" "}
        </div>
        <b>Mobile</b>
      </div>
      <div>
        <b>Price</b>
        <div>
          {" "}
          <input type="range" name="" id="" />
        </div>
      </div>
      <div className="priceRange">
        <div>
          <select
            name="Range"
            value={props.minp}
            onChange={(e) => {
              props.setMinprice(e.target.value);
              const a = maxPrice.filter((ass) => ass.value > e.target.value);
              setMaxOption(a);
            }}
            id=""
          >
            {minOption.map((curelm) => (
              <option value={curelm.value}>{curelm.lbl}</option>
            ))}
          </select>
        </div>
        <div>To</div>
        <div>
          <select
            name="pri"
            value={props.maxp}
            id=""
            onChange={(e) => {
              props.setMaxprice(e.target.value);
              const a = minPrice.filter((ass) => ass.value < e.target.value);
              setMinOption(a);
            }}
          >
            {maxOption.map((zx) => (
              <option value={zx.value}>{zx.lbl}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <input type="checkbox" name="" id="" /> realme
      </div>
      <div>
        <div>
          <b>Customer Rating</b>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={props.rat4}
              onChange={(e) => {
                props.setrat4(e.target.checked);
              }}
            />{" "}
            4 &#9733; &#38; Above
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={props.rat3}
              onChange={(e) => {
                props.setrat3(e.target.checked);
              }}
            />{" "}
            3 &#9733; &#38; Above
          </div>
          <div>
            {" "}
            <input
              type="checkbox"
              name=""
              id=""
              checked={props.rat2}
              onChange={(e) => {
                props.setrat2(e.target.checked);
              }}
            />{" "}
            2 &#9733; &#38; Above
          </div>
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              checked={props.rat1}
              onChange={(e) => {
                props.setrat1(e.target.checked);
              }}
            />{" "}
            1 &#9733; &#38; Above
          </div>
        </div>
      </div>
      {/* <h1>{`${props.rat4}`}</h1>
      <h1>{`${props.rat3}`}</h1>
      <h1>{`${props.rat2}`}</h1>
      <h1>{`${props.rat1}`}</h1> */}
    </div>
  );
};

export default Side;
