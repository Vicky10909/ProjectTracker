import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: null,
    projects: [],
  });

  function handleAddStartClick() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSaveProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = projectData;
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleAddTasks(text) {
    setProjectsState((prevState) => {
      const newTask = {
        taskContent: text,
        taskId: Math.random(),
      };
      const updatedProjects = [...prevState.projects];

      // find the project you want to add tasks to
      const projectToAddTasks = updatedProjects.find(
        (project) => project.id === prevState.selectedProjectId
      );

      const updatedTasks = [...projectToAddTasks.tasks, newTask];

      projectToAddTasks.tasks = updatedTasks;

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTasks(id) {
    setProjectsState(prevState => {
      const updatedProjects = [...prevState.projects];
      const projectToDeleteTasks = updatedProjects.find(project => project.id === prevState.selectedProjectId);

      const updatedTasks = [...projectToDeleteTasks.tasks.filter(task => task.taskId !== id)];
      projectToDeleteTasks.tasks = updatedTasks;

      return {
        ...prevState,
        projects: updatedProjects,
      }
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCanel() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  // find the correct selected project
  const project = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [
          ...prevState.projects.filter((project) => project.id !== id),
        ],
      };
    });
  }

  let content = (
    <SelectedProject
      selectedProject={project}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTasks}
      onDeleteTask={handleDeleteTasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NoProjectSelected onAddStart={handleAddStartClick} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NewProject onSaveProject={handleSaveProject} onCancel={handleCanel} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onAddStart={handleAddStartClick}
        projects={projectsState.projects}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
