import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "mdb-ui-kit/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllCards from "./components/AllCards";

function App() {
  return (
    <div className="body-container">
      <MyNav />
      <AllCards />
      <MyFooter />
    </div>
  );
}

export default App;
