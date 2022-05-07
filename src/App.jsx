import "./App.css";
import Nav from "./Navbar/Nav";
import Side from "./SideBar/Side";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import { dummyInfo } from "./Card/info";
import React, { useState } from "react";
function App() {
  const [rating4, setRating4] = useState(false);
  const [rating3, setRating3] = useState(false);
  const [rating2, setRating2] = useState(false);
  const [rating1, setRating1] = useState(false);
  const [minPrice, setMinprice] = useState("0");
  const [maxPrice, setMaxprice] = useState("50001");
  const [range, setRange] = useState("69");
  return (
    <>
      <SearchBar />
      <Nav />

      <div className="boobs">
        <div className="pen">
          <Side
            rat4={rating4}
            setrat4={setRating4}
            rat3={rating3}
            setrat3={setRating3}
            rat2={rating2}
            setrat2={setRating2}
            rat1={rating1}
            setrat1={setRating1}
            minp={minPrice}
            maxp={maxPrice}
            setMaxprice={setMaxprice}
            setMinprice={setMinprice}
            range={range}
            setRange={setRange}
          />
        </div>
        <div className="nb">
          <div>
            <h1>{`${minPrice}`}</h1>
            <h1>{`${maxPrice}`}</h1>
            <h1>{`${rating2}`}</h1>
            <h1>{`${rating1}`}</h1>
            <h1>{`${range}`}</h1>
          </div>{" "}
          {dummyInfo.map((tits) => (
            <Card somesh={tits} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
