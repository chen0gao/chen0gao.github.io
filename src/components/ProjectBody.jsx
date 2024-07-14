import Chip from "@mui/material/Chip";

export default function ProjectBody({ title, desc, tag, href }) {
  return (
    <div className="projectBody">
      <div className="projectHeader">
        <a href={href} className="projectHeaderTitle">
          {title}
        </a>
        {tag &&
          tag.map((ele) => {
            return (
              <Chip
                label={ele}
                href={href}
                className="label"
                key={ele}
                variant="outlined"
              />
            );
          })}
      </div>
      <div className="projectDesc">
        {desc &&
          desc.map((ele) => {
            return <li key={ele}>{ele}</li>;
          })}
      </div>
    </div>
  );
}
