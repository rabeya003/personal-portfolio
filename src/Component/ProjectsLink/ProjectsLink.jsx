import { useEffect, useState } from "react";

const ProjectsLink = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/gitdetails.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div id="projects" className="mb-12 max-w-7xl mx-auto">
      <h2 className="flex justify-center text-3xl font-bold mb-12">
        My Projects
      </h2>
      <hr />
      <div className="mt-4 px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="card w-72 h-72 bg-base-100  shadow-2xl shadow-slate-700">
              <figure>
                <img className="h-28" src={project.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <div className="card-actions justify-end">
                  <div className="badge   shadow-md shadow-cyan-500/50 p-4">
                    <a target="_blank" href={project.liveLink}>
                      Live Link
                    </a>
                  </div>
                  <div className="badge   shadow-md shadow-cyan-500/50 p-4">
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
