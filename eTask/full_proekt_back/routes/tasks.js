import express from "express";
const router = express.Router();

import TasksController from "../controllers/TasksController.js";
const controller = new TasksController();

router.get('/user/:id', TasksController.getByUserId);
router.get('/history/:id', TasksController.getHistory);
router.get('/', controller.list);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/:id', controller.update);

router.delete('/:id', controller.delete);




export default router;
