const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <img src={project.img} alt={project.category} />;
      })}
    </>
  );
};

export default ProjectList;
