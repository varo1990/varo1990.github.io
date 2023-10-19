import Tasks from "../models/Tasks.js";
import BaseController from "./BaseController.js";


class TasksController extends BaseController {
    constructor() {
        super(Tasks);
    }
    static getByUserId = async (req, res) => {
        try {
            const {error} = Tasks.rulesQuery(req.params);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const where = {
                where: {
                    user_id: req.params.id,
                    status: 'ACTIVE'
                }
            };

            const items = await Tasks.findAll(where);
            console.log(items)
            if (!items) {
                return res.status(404).json({error: 'Item not found'});
            }

            return res.json(items);
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
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
