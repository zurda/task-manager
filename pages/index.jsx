import Link from "next/link";

const HomePage = () => (
  <div>
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
);

export default HomePage;
