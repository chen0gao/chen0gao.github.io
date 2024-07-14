export default function Footer(props) {
  return (
    <session id="footnote">
      <div>
        ©2024 Chen Gao | Past Site:
        <a href={process.env.PUBLIC_URL + "/archive/2018"}>@2018</a>
        <a href={process.env.PUBLIC_URL + "/archive/2021"}>@2021</a>
      </div>
    </session>
  );
}
