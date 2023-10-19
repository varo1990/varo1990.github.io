import express from "express";
const router = express.Router();

import TasksController from "../controllers/TasksController.js";
const controller = new TasksController();

router.get('/', controller.list.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.get('/user/:id', TasksController.getByUserId);

router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));

router.delete('/:id', controller.delete.bind(controller));




export default router;
