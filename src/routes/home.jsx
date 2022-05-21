import Header from "../js/header";
import SubHeader from "../js/subheader";
import Badge from "../js/badge";

import { ReactComponent as Linkedin } from "../icon/linkedin.svg";
import { ReactComponent as Project } from "../icon/project.svg";
import { ReactComponent as Github } from "../icon/github.svg";

import "../css/badge.css";
import "../css/index.css";

export default function Home() {
  return (
    <section id="home">
      <Header />
      <SubHeader />
      <section className="badgeList">
        <Badge
          svg={<Linkedin />}
          text="Linkedin"
          href="https://www.linkedin.com/in/chen-gao-5254b4202"
        />
        <Badge svg={<Project />} text="Project" href="./project" />
        <Badge
          svg={<Github />}
          text="Github"
          href="https://github.com/chen0gao"
        />
      </section>
    </section>
  );
}
