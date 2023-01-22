import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
// import ReactDOM from "react-dom";
import "./App.css";

var informations = [
  {
    fullname: "Sabrina Lhasbellaoui",
    address: "Algiers, Algeria",
    photo:
      "https://i.pinimg.com/736x/d2/6c/bb/d26cbbdee6b592f6b29aea4412c290f6.jpg",
  },
];

function App() {
  // const rootElement = document.getElementById("root");
  // ReactDOM.render(<App />, rootElement);
  return (
    <div className="App">
      <ProfilePhoto informations={informations} />
      <FullName informations={informations} />
      <Address informations={informations} />
    </div>
  );
}

export default App;
