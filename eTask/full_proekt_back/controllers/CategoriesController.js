import Categories from "../models/Categories.js";
import BaseController from "./BaseController.js";


class CategoriesController extends BaseController {
    constructor() {
        super(Categories);
    }

    async list(req, res) {
          return super.list(req, res);
    }

    async getById(req, res) {
        return super.getById(req, res);
    }

    async create(req, res) {
        return super.create(req, res);
    }

    async update(req, res) {
        return super.update(req, res);
    }

    async delete(req, res) {
        return super.delete(req, res);
    }
}

export default CategoriesController;
