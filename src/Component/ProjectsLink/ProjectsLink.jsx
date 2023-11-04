import { useEffect, useState } from "react";

const ProjectsLink = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/gitdetails.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div id="projects">
      <h2 className="flex justify-center text-3xl mb-12 font-bold">
        My Projects
      </h2>
      <hr />
      <div className="mt-4 px-16 grid grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-scroll">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="card w-72 h-72 bg-base-100 shadow-xl">
              <figure>
                <img className="h-28" src={project.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    <a target="_blank" href={project.liveLink}>
                      Live Link
                    </a>
                  </div>
                  <div className="badge badge-outline">
                    <a target="_blank" href={project.repoLink}>
                      Repo Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsLink;
