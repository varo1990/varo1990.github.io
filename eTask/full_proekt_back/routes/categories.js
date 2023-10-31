import express from "express";
const router = express.Router();

import CategoriesController from "../controllers/CategoriesController.js";
const controller = new CategoriesController();

router.get('/user/:id', CategoriesController.getByUserId);
router.get('/history/:id', CategoriesController.getHistory);

router.get('/', controller.list);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/:id', controller.update);



router.delete('/:id', controller.delete);


export default router;
