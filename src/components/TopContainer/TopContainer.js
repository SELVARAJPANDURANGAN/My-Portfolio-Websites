import React from "react";
import "./TopContainer.css";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";

const TopContainer = () => {
  return (
    <Element className="topContainer" name="about">
 <TopContent/>
    
      {/* <TopContent setSelected={setSelected} /> */}
    </Element>
  );
};

export default TopContainer;