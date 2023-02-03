import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "mdb-ui-kit/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllCards from "./components/AllCards";
import TvShows from "./components/TvShows";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="body-container">
      <MyNav />
      <Profile />
      {/* <TvShows />
      <AllCards />
      <MyFooter /> */}
    </div>
  );
}

export default App;
