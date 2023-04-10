const getTasks = `SELECT * FROM "tasks"`;
const getTaskById = `SELECT * FROM "tasks" WHERE id = $1`;
const addTask = `INSERT INTO "tasks" (name) VALUES ($1)`;
const removeTaskById = `DELETE FROM "tasks" WHERE id = $1`;
const updateTaskById = `UPDATE "tasks" SET name = $1 WHERE id = $2`;


module.exports = {
    getTasks,
    getTaskById,
    addTask,
    removeTaskById,
    updateTaskById,
}