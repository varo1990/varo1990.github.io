import express from "express";
const router = express.Router();

import CategoriesController from "../controllers/CategoriesController.js";
const controller = new CategoriesController();

router.get('/', controller.list.bind(controller));
router.get('/:id', controller.getById.bind(controller));

router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));

router.delete('/:id', controller.delete.bind(controller));


export default router;
