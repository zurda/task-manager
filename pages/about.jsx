/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const About = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1>About</h1>
      <p>Task manager app to practice NextJS.</p>
    </div>
  </div>
);

export default About;
