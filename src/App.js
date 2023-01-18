import { useState } from "react";
import "./App.css";
import projects from "./projects";
import Toolbar from "./Toolbar";

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



const ProjectList = ({ projects }) => {
  return <>
    { projects.length }
  </>;
};

function App() {
  return <Portfolio />;
}

export default App;
