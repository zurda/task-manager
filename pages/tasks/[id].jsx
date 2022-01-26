/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";

const Tasks = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1>Task: {id} </h1>
      </div>
    </div>
  );
};

export default Tasks;
