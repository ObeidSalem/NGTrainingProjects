const getTasks = `SELECT * FROM "tasks"`;
const getTaskById = `SELECT * FROM "tasks" WHERE id = $1`;
const addTask = `INSERT INTO "tasks" (task, day, reminder) VALUES ($1, $2, $3)`;
const removeTaskById = `DELETE FROM "tasks" WHERE id = $1`;
const updateTaskById = `UPDATE "tasks" SET task = $1, day = $2, reminder = $3 WHERE id = $4`;


module.exports = {
    getTasks,
    getTaskById,
    addTask,
    removeTaskById,
    updateTaskById,
}