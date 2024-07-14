import Header from "../components/Header";
import SubHeader from "../components/Subheader";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

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
          href="https://www.linkedin.com/in/chen0gao"
        />
        <Badge svg={<Project />} text="Project" href="./project" />
        <Badge
          svg={<Github />}
          text="Github"
          href="https://github.com/chen0gao"
        />
      </section>
      <Footer />
    </section>
  );
}
