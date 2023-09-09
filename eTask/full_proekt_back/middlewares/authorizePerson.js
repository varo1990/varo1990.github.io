import jwt from "jsonwebtoken";
import HttpError from "http-errors";

const { JWT_SECRET } = process.env;

export default function authorizePerson(req, res, next) {
  try {
    if (req.method === 'OPTIONS') {
      next();
      return;
    }
    const { 'x-token': token } = req.headers;

    const { personId } = jwt.verify(token, JWT_SECRET);
    if (!personId) {
      throw HttpError(401);
    }
    req.personId = personId;
    next()
  } catch (e) {
    e.status = 401;
    next(e)
  }
}
