import express from "express";
import users from "./users.js";

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    status: 'ok'
  });
});

router.use('/users', users)
export default router;