import Pic from "./Pic";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="homeLeft">
          <h1>
            {" "}
            Travel to <br></br> your dream <br></br> destination
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button>Reserve Ticket</button>
        </div>
        <div className="homeRight">
          <Pic />
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>My Travel Logs</button>
      </div>
    </div>
  );
};
export default Home;
