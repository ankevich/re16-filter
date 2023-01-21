import { useState } from "react";
import styled from "styled-components";
import projects from "./projects";
import Toolbar from "./components/Toolbar";
import ProjectList from "./components/ProjectList";

function App() {
  return <Portfolio />;
}

const Portfolio = () => {
  const filters = ["All", "Websites", "Flyers", "Business Cards"];
  const [ selected, changeSelection ] = useState("All");
  const [ state, changeState ] = useState([]);

  return (
    <Container>
      <Toolbar filters={filters} selectedFilterName={selected} />
      <ProjectList projects={projects} />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 980px;
`;

export default App;
