const tasks = new Array(10).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Task ${i}`,
}));

module.exports = tasks;
