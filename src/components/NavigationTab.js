// import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import "./navigationTab.css";

const NavigationTab = (props) => {
  const smtmHome = (e) => {
    e.target.style.background = "#F7D0C8 ";
    console.log(e);
  };

  const colorGayeb = (e) => {
    e.target.style.background = "#FFFFFF";
  };

  const navigateSmtm = () => {
    window.location.href = "https://smtmcapital.com.np/";
  };

  return (
    <div className="App">
      <div className="navigationAppendDiv">
        <div className="firstDiv">
          {props.data.map((item) => (
            <div className="navigationElements">{item.title}</div>
          ))}
        </div>

        <div className="secondDiv">
          <button
            className="navigationButton"
            onMouseOver={smtmHome}
            onMouseLeave={colorGayeb}
            onClick={navigateSmtm}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationTab;
