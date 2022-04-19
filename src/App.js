import "./App.css";
import HeaderComponent from "./components/header";
import DotsComponent from "./components/dots";
import GridComponent from "./components/grid";
import FooterComponent from "./components/footer";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <DotsComponent />
      <GridComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
