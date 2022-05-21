import Badge from "../js/badge";
import ProjectBody from "../js/projectBody";

import "../css/project.css";

import json from "../data/project.json";

import { ReactComponent as ProjectSvg } from "../icon/project.svg";

export default function Project() {
  return (
    <section id="project">
      <div className="projectBadge">
        <Badge svg={<ProjectSvg />} text="Project" href="../" />
      </div>
      <section className="frame">
        {json &&
          json.map((ele) => {
            return (
              <ProjectBody
                key={ele.title}
                title={ele.title}
                href={ele.href}
                tag={ele.tag}
                desc={ele.desc}
              />
            );
          })}
      </section>
    </section>
  );
}
