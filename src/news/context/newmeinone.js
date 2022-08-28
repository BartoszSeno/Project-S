import "./templates/newmeinone.css";
import React, { useState } from "react";
import { NewsLoad } from "./newexport";

const NewsBoxOne = () => {
  const [noOfElement, setnoOfElement] = useState(6);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = NewsLoad.slice(0, noOfElement);
  return (
    <div className="first_box_load">
      <div className="news_three_box">
        {slice.map((item, index) => {
          return (
            <div className="news_boxx">
              <div className="news_position">
                <div className="news_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="news_text_box">
                  <div className="news_title">{item.title}</div>
                  <div className="news_text">{item.text}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="button_box">
          <div className="staticTest"></div>
          <button className="button_more" onClick={() => loadMore()}>
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsBoxOne;
