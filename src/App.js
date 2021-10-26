import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  //BEM
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* home */}
      <Home />
    </div>
  );
}

export default App;
