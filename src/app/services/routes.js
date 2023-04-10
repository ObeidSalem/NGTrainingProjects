const {Router} = require('express')
const controller = require('./controller')

const router = Router();

router.get('/', controller.getTasks)
router.post('/', controller.addTask)
router.get('/:id', controller.getTaskById)
router.put('/:id', controller.updateTaskById)
router.delete('/:id', controller.removeTaskById)


module.exports = router;