import nc from "next-connect";
import tasks from "../../../src/data";

const getTask = (id) => tasks.find((n) => n.id === parseInt(id));

const handler = nc()
  .get((req, res) => {
    // Get the task id using params
    const task = getTask(req.query.id);

    if (!task) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: task });
  })
  .patch((req, res) => {
    const task = getTask(req.query.id);

    if (!task) {
      res.status(404);
      res.end();
      return;
    }

    const i = tasks.findIndex((n) => n.id === parseInt(req.query.id));
    const updated = { ...task, ...req.body };

    tasks[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const task = getTask(req.query.id);

    if (!task) {
      res.status(404);
      res.end();
      return;
    }
    const i = tasks.findIndex((n) => n.id === parseInt(req.query.id));

    tasks.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
