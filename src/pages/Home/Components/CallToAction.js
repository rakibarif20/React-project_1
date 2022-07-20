import React from "react";
import { callToAction } from "../../../assests/data";

//css file
import "./css/callToAction.scss";

const CallToAction = () => {
  const { title, desc } = callToAction;
  return (
    <div className="callToAction">
      <div className="callToAction__desc">
        <h2>{title}</h2>
        <p>{desc}</p>
        <button className="btn">Read more</button>
      </div>
    </div>
  );
};

export default CallToAction;
