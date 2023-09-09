

import express from "express";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

router.post('/login', UsersController.login);
router.post('/register', UsersController.register);
router.post('/activate', UsersController.activate);
router.get("/list", UsersController.list);
router.get("/single/:userId", UsersController.singleUser);
router.get("/profile", UsersController.profile);
export default router;