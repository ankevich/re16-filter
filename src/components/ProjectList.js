import styled from "styled-components";

const ProjectList = ({ projects, selectedFilter }) => {
  return (
    <List>
      {projects.map((project) => {
        return selectedFilter === "All" ||
          selectedFilter === project.category ? (
            <img src={project.img} alt={project.category} />
          ) : null;
      })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 30%;
    margin-bottom: 1rem;
    object-fit: cover;
  }

`;

export default ProjectList;
