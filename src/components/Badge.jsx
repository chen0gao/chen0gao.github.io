import { Link } from "react-router-dom";

export default function Badge({ svg, text, href }) {
  let link = href.includes("http") ? (
    <a className="svg" href={href}>
      <>{svg}</>
      <div className="badgeText hand-write">{text}</div>
    </a>
  ) : (
    <Link className="svg" to={href}>
      <>{svg}</>
      <div className="badgeText hand-write">{text}</div>
    </Link>
  );
  return <div className={`badgeIcon ${text}`}>{link}</div>;
}
