import Pic from "./Pic";
import "./Home.css";
const Home = () => {
  const navigateSmtmAboutUs = () => {
    window.location.href = "https://smtmcapital.com.np/about-us/";
  };
  const navigateSmtmProductPage = () => {
    window.location.href = "https://smtmcapital.com.np/products/";
  };
  const smtmHome = (e) => {
    e.target.style.background = "#F7D0C8 ";
  };

  const colorGayeb = (e) => {
    e.target.style.background = "#000000";
  };

  return (
    <>
      <div className="wrapperForHome">
        <div className="home">
          <div className="homeLeft">
            <h1>
              {" "}
              Travel to <br></br> your dream <br></br> destination
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button
              onClick={navigateSmtmProductPage}
              onMouseOver={smtmHome}
              onMouseLeave={colorGayeb}
            >
              Reserve Ticket{" "}
            </button>
          </div>
          <div className="homeRight">
            <Pic />
          </div>
        </div>
      </div>

      <div className="kaaloDiv">
        <h1>
          {" "}
          Create a memory <br></br>to remember
        </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br></br>magna
          aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <button
          onClick={navigateSmtmAboutUs}
          onMouseOver={smtmHome}
          onMouseLeave={colorGayeb}
        >
          My Travel Logs
        </button>
      </div>
    </>
  );
};
export default Home;
