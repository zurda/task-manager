/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const HomePage = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1>Task manager</h1>

      <ul>
        <li>
          <Link href="/tasks">
            <a>Tasks</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default HomePage;
