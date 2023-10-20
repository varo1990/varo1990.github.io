import Categories from "../models/Categories.js";
import BaseController from "./BaseController.js";
import Tasks from "../models/Tasks.js";


class CategoriesController extends BaseController {
    constructor() {
        super(Categories);
    }

    categoryWithTasks = async (req, res) => {

    }

    static getByUserId = async (req, res) => {
        try {
            const {error} = Categories.rulesQuery(req.params);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const options = {
                where: {
                    user_id: req.params.id,
                    isActive: true
                },
                include: Tasks,
            };

            const items = await Categories.findAll(options);

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

export default CategoriesController;
