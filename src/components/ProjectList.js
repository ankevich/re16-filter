import styled from "styled-components";

const ProjectList = ({ projects }) => {
  return (
    <List>
      {projects.map((project) => {
        return <img src={project.img} alt={project.category} />;
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
