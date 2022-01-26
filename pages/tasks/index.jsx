/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Tasks = ({ tasks }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Tasks</h1>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {tasks.map((task, i) => (
          <div key={i} sx={{ width: "33%", p: 2 }}>
            <Link key={task.id} href="/tasks/[id]" as={`/tasks/${task.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{task.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/task`);
  const { data } = await res.json();
  return {
    props: { tasks: data },
  };
}

export default Tasks;
