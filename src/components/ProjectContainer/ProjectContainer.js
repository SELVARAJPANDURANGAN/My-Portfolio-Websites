import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";

const ProjectContainer = () => {

const projects = [
    {
      img: img1,
      title: "Stackoverflow",
      desc: "Stack Overflow is a question and answer website for programmers. It is the flagship site of the Stack Exchange Network",
      link: "https://stackoverflow.com/",
    },
    {
      img: img2,
      title: "Ice and Fire API",
      desc: "The world's greatest source for quantified and structured data from the universe of Ice and Fire ",
      link: "https://anapioficeandfire.com/",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which are changing many people lives and some
        clone works of large tech tack companies.
      </p>

      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
