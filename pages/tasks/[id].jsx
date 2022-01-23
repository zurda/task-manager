import { useRouter } from "next/router";

const Tasks = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Task: {id} </h1>;
};

export default Tasks;
