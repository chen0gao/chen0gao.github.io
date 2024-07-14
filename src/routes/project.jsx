import ProjectBody from "../components/ProjectBody";

import "../css/project.css";

import json from "../data/project.json";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <section id="project">
      <section id="projectHeader">
        <div class="hand-write">Project</div>
        <Link class="back hand-write" to="../">
          back
        </Link>
      </section>
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
