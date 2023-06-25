import "./horizontalRule.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HorizontalRule = () => {
  return (
    <>
      <div className="lineDiv">
        <hr className="horizontal-rule" />
      </div>
      <div className="paragraphAndPlus">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <FontAwesomeIcon className="plusIcon" icon={faPlus} />
      </div>
    </>
  );
};
export default HorizontalRule;
