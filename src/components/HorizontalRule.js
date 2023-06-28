import "./horizontalRule.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const HorizontalRule = () => {
  const [addVisibility, setAddVisibility] = useState("0");

  const [paddingBottom, setPaddingBottom] = useState("");

  const expandArea = () => {
    setPaddingBottom("50px");
    setAddVisibility("1");
  };

  const decreaseArea = () => {
    setPaddingBottom("0px");
    setAddVisibility("-1");
  };

  const plusIconStyle = {
    display: addVisibility === "1" ? "none" : "block",
  };

  const minusIconStyle = {
    display: addVisibility === "-1" || addVisibility === "0" ? "none" : "block",
  };

  return (
    <>
      <div className="lineDiv">
        <hr className="horizontal-rule" />
      </div>
      <div className="paragraphAndPlus" style={{ paddingBottom }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <FontAwesomeIcon
          className="plusIcon"
          icon={faPlus}
          onClick={expandArea}
          style={plusIconStyle}
        />

        <FontAwesomeIcon
          className="minusIcon"
          icon={faMinus}
          onClick={decreaseArea}
          style={minusIconStyle}
        />
      </div>
    </>
  );
};
export default HorizontalRule;
