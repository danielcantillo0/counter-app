import "./project-list.styles.css";

const ProjectList = ({ handleSelector, projectJsx }) => {
  const projects = ["counter", "calculator", "quotes", "weather"];

  return (
    <div className="projectlist-container">
      <div className="selector-container">
        {projects.map((project) => {
          return (
            <div
              onClick={() => handleSelector(project)}
              className="project-selector"
            >
              {project.toLocaleUpperCase()}
            </div>
          );
        })}
      </div>
      {projectJsx}
    </div>
  );
};

export default ProjectList;
