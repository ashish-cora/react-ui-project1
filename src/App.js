import "./app.css";
import Home from "./components/Home";
import NavigationTab from "./components/NavigationTab";
import ContainerForTmc from "./components/ContainerForTmc";

function App() {
  const navigationArray = [
    { title: "Home" },
    { title: "Guide" },
    { title: "Flights" },
    { title: "About" },
  ];
  return (
    <div className="entirePage">
      <NavigationTab data={navigationArray} />;
      <Home />
      <ContainerForTmc />
    </div>
  );
}

export default App;
