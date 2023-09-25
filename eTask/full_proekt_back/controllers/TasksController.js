import Tasks from "../models/Tasks.js";
import BaseController from "./BaseController.js";


class TasksController extends BaseController {
    constructor() {
        super(Tasks);
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

export default TasksController;
