import User from "./User";
import ThreeMiddleComponents from "./ThreeMiddleComponents";
import "./containerForTmc.css";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalRule from "./HorizontalRule";
import Pic from "./Pic";
import React, { useState } from "react";
import { Carousel as ReactCarousel } from "@trendyol-js/react-carousel";

const ContainerForTmc = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Description:", description);
  };

  const titleArrayForTmc = [
    { title: "Hiking man", key: "1" },
    { title: "Nature", key: "2" },
    { title: "Arko man", key: "3" },
  ];

  const arrayNames = [
    { name: "Ashish", key: "1" },
    { name: "Ruman", key: "2" },
    { name: "Smarika", key: "3" },
    { name: "Bisham", key: "4" },
    { name: "Himal", key: "5" },
    { name: "Bihan", key: "6" },
  ];

  // const consoleKhol = (e) => {
  //   console.log("event target", e.target.value);
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="cftmc">
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
        <p>
          Here's what they <br></br> have to say...
        </p>
      </div>

      <div className="carousel-wrapper">
        <ReactCarousel
          className="userCarousel"
          responsive={true}
          show={2.8}
          slide={1}
          swiping={true}
          leftArrow={
            <div className="wrapper-for-arrow arrow-left">
              <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
            </div>
          }
          rightArrow={
            <div className="wrapper-for-arrow arrow-right">
              <FontAwesomeIcon className="arrow" icon={faArrowRight} />
            </div>
          }
        >
          {arrayNames.map((saman) => (
            // {console.log('saman',saman)}
            <div>
              <User info={saman} />
            </div>
          ))}
        </ReactCarousel>
      </div>
      <div className="wrapperForForm">
        <div className="left-form">
          <h1>Be updated!</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              className="formElements"
              placeholder="&nbsp;&nbsp;&nbsp;First Name*"
              type="text"
            />
            <input
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              className="formElements"
              placeholder="&nbsp;&nbsp;&nbsp;Last Name*"
              type="text"
            />
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="formElements"
              placeholder="&nbsp;&nbsp;&nbsp;Email Subject*"
              type="email"
            />
            <textarea
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              className="formElements"
              placeholder="&nbsp;&nbsp;Write something here..."
            />
            <button className="formElements" id="buttonSubmit" type="submit">
              Submit Email
            </button>
          </form>
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
    </div>
  );
};

export default ContainerForTmc;
