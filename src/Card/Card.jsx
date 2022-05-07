import React from "react";
import "./Card.scss";
import { dummyInfo } from "./info.js";
function Card(props) {
  const {
    title,
    rating,
    imageSrc,
    specifications,
    price,
    discount,
    deliveryDate,
    offer,
    bankOffer,
    star,
  } = props.somesh;
  //   const b = dummyInfo.map((porn) => {
  //     // console.log(first)
  //   });
  return (
    <div>
      <div className="whole">
        <div className="pic">
          <img src={imageSrc} alt="non" />
        </div>

        <div className="koko">
          <strong>
            <div className="tit">{title}</div>
          </strong>
          <div className="rat">
            <span className="star">
              <strong>4.4</strong>
              <span className="sym"> &#9734;</span>
            </span>
            {rating}
          </div>
          <div className="spec">
            {/* {console.log("Specifications ::::: ", specifications)} */}
            <ul>
              {specifications.map((sex) => (
                <li>{sex}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mdis">
          <strong>
            <div className="pri">{price}</div>
          </strong>
          <del>
            <div className="dic">{discount}</div>
          </del>
          <div className="deli">{deliveryDate}</div>
          <strong>
            <div className="offer">{offer}</div>
          </strong>
          <strong>
            <div className="ban">{bankOffer}</div>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Card;
