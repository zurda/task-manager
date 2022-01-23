import Link from "next/link";

const Tasks = () => {
  const tasks = new Array(15)
    .fill(1)
    .map((_, i) => ({ id: i, title: `Task: ${i}` }));
  return (
    <>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div>
          <Link key={task.id} href="/tasks/[id]" as={`/tasks/${task.id}`}>
            <a>
              <strong>{task.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Tasks;
