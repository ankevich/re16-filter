import { useState } from "react";
import "./App.css";
import projects from "./projects";

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

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return <>
    { filters }
  </>;
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
