import "./navigationTab.css";

const NavigationTab = (props) => {
  return (
    <div className="App">
      <div className="navigationAppendDiv">
        <div className="firstDiv">
          {props.data.map((item) => (
            <div className="navigationElements">{item.title}</div>
          ))}
        </div>

        <div className="secondDiv">
          <button className="navigationButton">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationTab;
