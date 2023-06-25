import React from "react";
import "./threeMiddleComponents.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThreeMiddleComponents = (props) => {
  let imageElement;
  console.log("title pic", props.data.title);
  if (props.data.title === "Hiking man") {
    imageElement = <img src="/manHiking.jpg " alt="man-hiking" />;
  } else if (props.data.title === "Nature") {
    imageElement = <img src="/middleNature.jpg" alt="middleNature" />;
  } else {
    imageElement = <img src="/arkoMan.jpg" alt="arkoMan" />;
  }

  return (
    <div className="toAddNatureContent">
      {imageElement}
      {/* <img src="./manHiking.jpg" alt="man-hiking"></img> */}

      <FontAwesomeIcon className="minus" icon={faMinus} size="2x" />
      <div className="titleNature">{props.data.title}</div>

      <p>
        Hi!! i am traveller Ashish. I have travelled all around the world. I
        have explored grand line and bermuda triangle as well!
      </p>
    </div>
  );
};

export default ThreeMiddleComponents;
