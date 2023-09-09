import Users from "../models/Users.js";
import { v4 as uuidV4 } from "uuid";
import HttpError from "http-errors";
import nodemailer from "nodemailer";
import Mail from "../services/Mail.js";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const { JWT_SECRET } = process.env

class UsersController {
  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({
        where: {
          email,
          password: Users.passwordHash(password)
        }
      });
      if (!user) {
        throw HttpError(403, 'Invalid email or password')
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET);

      res.json({
        status: 'ok',
        user,
        token,
      })
    } catch (e) {
      next(e);
    }
  }
  static register = async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      const exists = await Users.findOne({
        attributes: ['id', 'status'],
        where: {
          email,
        }
      });
      if (exists) {
        if (exists.status === 'pending') {
          await exists.destroy();
        } else {
          throw HttpError(422, {
            errors: {
              email: 'This email is already registered'
            }
          })
        }

      }

      const validationCode = uuidV4();


      await Mail.send(email, 'Account Activation', 'userActivation', {
        email,
        firstName,
        lastName,
        validationCode,
      })


      const user = await Users.create({
        firstName,
        lastName,
        email,
        password,
        status: 'pending',
        validationCode
      });

      res.json({
        status: 'ok',
        user,
      })
    } catch (e) {
      next(e);
    }
  }
  static activate = async (req, res, next) => {
    try {
      const { code, email } = req.body;

      const user = await Users.findOne({
        where: {
          email,
          validationCode: code,
          status: 'pending',
        }
      });
      if (!user) {
        throw HttpError(403, 'Invalid activation code')
      }
      user.status = 'active';
      user.validationCode = null;
      await user.save();
      const token = jwt.sign({ userId: user.id }, JWT_SECRET);

      res.json({
        status: 'ok',
        user,
        token,
      })
    } catch (e) {
      next(e);
    }
  }

  static reset = async (req, res, next) => {
    try {
      const { email } = req.body
      const user = await Users.findOne({
        where: {
          email,
        }
      })
      if (user) {
        throw HttpError(404);
      }
      const validationCode = uuidV4();

      await Mail.send(email, 'Reset Password', 'userPasswordReset', {
        email,
        firstName: user.firstName,
        lastName: user.lastName,
        validationCode,
      })

      user.validationCode = validationCode;
      await user.save()

      res.json({
        status: "ok",
      })
    } catch (e) {
      next(e)
    }
  }

  static confirm = async (req, res, next) => {
    try {
      const { code, password, email } = req.body;
      const user = await Users.findOne({
        where: {
          status: 'active',
          email,
          validationCode: code
        }
      })
      if (user) {
        user.password = password;
        await user.save()
      }

      res.json({
        status: "ok",
        isPasswordChanged: true
      })
    } catch (e) {
      next(e)
    }
  }

  static list = async (req, res, next) => {
    try {
      const { search, limit = 20, page = 1 } = req.query;
      const where = {
        status: 'active'
      };
      if (search) {
        where.$or = [
          { firstName: { $like: `%${search}%` } },
          { lastName: { $like: `%${search}%` } },
          { email: { $like: `%${search}%` } }
        ]
      }

      const users = await Users.findAll({
        where,
        limit: +limit,
        offset: (page - 1) * limit
      });
      const total = await Users.count({
        where,
      });

      res.json({
        status: "ok",
        users,
        total,
        totalPage: Math.ceil(total / limit),
      })
    } catch (e) {
      next(e)
    }
  }
  static singleUser = async (req, res, next) => {
    try {
      const { userId } = req.params;

      const user = await Users.findByPk(userId);

      res.json({
        status: "ok",
        user,
      })
    } catch (e) {
      next(e)
    }
  }
  static profile = async (req, res, next) => {
    try {
      const { userId } = req;

      const user = await Users.findByPk(userId);

      res.json({
        status: "ok",
        user,
      })
    } catch (e) {
      next(e)
    }
  }
}

export default UsersController;