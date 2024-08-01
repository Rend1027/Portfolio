import Navbar from "./components/navbar/Navbar";
import ProjectSlider from "./layout/RightSection/ProjectSlider/ProjectSlider";
import "./App.css";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <ProjectSlider />
    </Fragment>
  );
};

export default App;
