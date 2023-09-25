import express from "express";
import users from "./users.js";
import categories from "./categories.js";
import tasks from "./tasks.js";

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    status: 'ok'
  });
});

router.use('/users', users)
router.use('/categories', categories)
router.use('/tasks', tasks)
export default router;