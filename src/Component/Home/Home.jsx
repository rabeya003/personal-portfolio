import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ProjectsLink from "../ProjectsLink/ProjectsLink";
import Skils from "../Skils/Skils";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skils></Skils>
      <ProjectsLink></ProjectsLink>
      <Contact></Contact>
    </div>
  );
};

export default Home;
