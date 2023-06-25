import User from "./User";
import ThreeMiddleComponents from "./ThreeMiddleComponents";
import "./containerForTmc.css";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalRule from "./HorizontalRule";
import Pic from "./Pic";

const ContainerForTmc = () => {
  const titleArrayForTmc = [
    { title: "Hiking man", key: "1" },
    { title: "Nature", key: "2" },
    { title: "Arko man", key: "3" },
  ];

  return (
    <>
      <div className="wrapperNature">
        {titleArrayForTmc.map((items) => (
          <ThreeMiddleComponents data={items} />
        ))}
      </div>
      <div className="placesYouTravelled">
        <FontAwesomeIcon icon={faPlaneUp} size="3x" />
        <p>See places you have travelled!!</p>
      </div>
      <div className="lineAndOnePicDiv">
        <div className="wrapperForLeftDiv">
          <HorizontalRule />
          <HorizontalRule />
          <HorizontalRule />
          <HorizontalRule />
          <hr className="horizontal-rule" />
        </div>
        <div className="picDiv">
          <img src="/girl.jpg"></img>
        </div>
      </div>

      <div className="para">
        <p>Here's what they have to say...</p>
      </div>
      <div className="wrapperForUser">
        <FontAwesomeIcon className="leftArrow" icon={faLeftLong} size="3x" />
        <User />
        <User />
        <User />
        <FontAwesomeIcon className="leftArrow" icon={faRightLong} size="3x" />
      </div>

      <div className="wrapperForForm">
        <div className="left-form">
          <h1>Be updated!</h1>
          <form className="form">
            <input
              className="formElements"
              placeholder="First Name*"
              type="text"
            />
            <input
              className="formElements"
              placeholder="Last Name*"
              type="text"
            />
            <input
              className="formElements"
              placeholder="Email Subject*"
              type="email"
            />
            <input
              className="formElements"
              placeholder="Write something here..."
              type="textarea"
            />
          </form>
          <button className="formElements" id="buttonSubmit" type="submit">
            Submit Email
          </button>
        </div>
        <div className="formPic">
          <Pic />
        </div>
      </div>
      <div className="footer">
        <div className="left">
          <h1>
            My Log <br />
            Travels
          </h1>
        </div>
        <div className="right">
          <div className="rightTop">
            <h3>QuickLinks</h3>
          </div>
          <div className="rightBot">
            <div className="firstPart">
              <div className="rightPara">
                <p>Home</p>
              </div>
              <div className="rightPara">
                <p>Travels</p>
              </div>

              <div className="rightPara">
                <p>Recommend</p>
              </div>
              <div className="rightPara">
                <p>Mission statement</p>
              </div>
              <div className="rightPara">
                <p>About Us</p>
              </div>
              <div className="rightPara">
                <p>Promo Flights</p>
              </div>
              <div className="rightPara">
                <p>Guides</p>
              </div>
              <div className="rightPara">
                <p>The Team</p>
              </div>
              <div className="rightPara">
                <p>My Travel Logs </p>
              </div>
              <div className="rightPara">
                <p>Travel Routes</p>
              </div>
              <div className="rightPara">
                <p>Blogs</p>
              </div>
              <div className="rightPara">
                <p>Contact Us</p>
              </div>
            </div>
            <div className="secondPart">
              <p> 2021-2022 MyLog Travels. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerForTmc;
