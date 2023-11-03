import { useEffect, useState } from "react";

const ProjectsLink = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch("/gitdetails.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return <div></div>;
};

export default ProjectsLink;
