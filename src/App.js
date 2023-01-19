import { useState } from "react";
import projects from "./projects";
import Toolbar from "./components/Toolbar";
import ProjectList from "./components/ProjectList";

const Portfolio = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const { selected, changeSelection } = useState("All");

  const { state, changeState } = useState([]);

  return (
    <>
      <Toolbar filters={filters} />
      <ProjectList projects={projects}/>
    </>
  );
};





function App() {
  return <Portfolio />;
}

export default App;
