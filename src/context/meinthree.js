import "./templates/meinthree.css";
import React, { useState } from "react";
import { NewsLoad } from "../news/context/newexport";

const Mainthree = () => {
  const [noOfElement, setnoOfElement] = useState(3);

  const slice = NewsLoad.slice(0, noOfElement);
  return (
    <div className="first_box_loadd">
      <div className="line2"></div>
      <div className="line1"></div>
      <div className="latest_newss">LATEST NEWS</div>
      <div className="news_three_boxx">
        {slice.map((item, index) => {
          return (
            <div className="news_boxxx">
              <div className="news_positionn">
                <div className="news_imgg">
                  <img src={item.image} alt="" />
                </div>
                <div className="news_text_boxx">
                  <div className="news_titlee">{item.title}</div>
                  <div className="news_textt">{item.text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mainthree;
