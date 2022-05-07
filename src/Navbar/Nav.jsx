import React from "react";
import "./Nav.scss";
const Nav = () => {
  return (
    <div className="nabyy">
      <div className="ele">
        <select name="Electronics" id="Electronics">
          <option value="TV" className="tv">
            TV
          </option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Earphone">Earphone</option>
        </select>
      </div>
      <div className="ele">
        <select name="Cloth" id="Cloth">
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Socks">Socks</option>
          <option value="UnderPant">UnderPant</option>
        </select>
      </div>
      <div className="ele">
        <select name="Cloth" id="Cloth">
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Socks">Socks</option>
          <option value="UnderPant">UnderPant</option>
        </select>
      </div>
      <div className="ele">
        <select name="Cloth" id="Cloth">
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Socks">Socks</option>
          <option value="UnderPant">UnderPant</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
