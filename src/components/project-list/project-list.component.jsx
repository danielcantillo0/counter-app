import "./project-list.styles.css";

const ProjectList = () => {
  const projects = ["counter", "calculator", "quotes", "weather"];

  return (
    <div className="selector-container">
      {projects.map((project) => {
        return (
          <button className="project-selector">
            {project.toLocaleUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectList;
