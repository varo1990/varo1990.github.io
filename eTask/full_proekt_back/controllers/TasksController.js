import Tasks from "../models/Tasks.js";
import Categories from "../models/Categories.js";
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

            const options = {
                where: {
                    user_id: req.params.id,
                    isActive: true
                },
                include: Categories,
            };

            const items = await Tasks.findAll(options);

            if (!items) {
                return res.status(404).json({error: 'Item not found'});
            }

            return res.json(items);
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    static getHistory = async (req, res) => {
        try {
            const {error} = Tasks.rulesQuery(req.params);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const options = {
                where: {
                    user_id: req.params.id,
                    isDone: true
                },
                include: Categories,
            };

            const items = await Tasks.findAll(options);

            if (!items) {
                return res.status(404).json({error: 'Item not found'});
            }

            return res.json(items);
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

}

export default TasksController;
