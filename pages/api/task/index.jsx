import nc from "next-connect";
import tasks from "../../../src/data";

const handler = nc()
  .get((req, res) => {
    res.json({ data: tasks });
  })
  .post((req, res) => {
    const id = Date.now();
    const task = { ...req.body, id };

    tasks.push(task);
    res.json({ data: task });
  });

export default handler;
