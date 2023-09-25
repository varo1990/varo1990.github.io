
class BaseController {

    constructor(model) {
        this._model = model;
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async list(req, res) {
        try {
            const items = await this._model.findAll();

            return res.json(items);
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }


    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async create(req, res) {
        try {
            const {error} = this._model.rulesBody(req.body);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const newItem = await this._model.create(req.body);

            return res.status(201).json(newItem);
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }


    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getById(req, res) {
        try {
            const {error} = this._model.rulesQuery(req.params);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const item = await this._model.findByPk(req.params.id);

            if (!item) {
                return res.status(404).json({error: 'Item not found'});
            }

            return res.json(item);
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }


    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async update(req, res) {
        try {
            const {error} = this._model.rulesQuery(req.params);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const item = await this._model.findByPk(req.params.id);

            if (!item) {
                res.status(404).json({error: 'Item not found'});
            }

            await item.update(req.body);

            return res.json(item);

        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async delete(req, res) {
        try {
            const {error} = this._model.rulesQuery(req.params);

            if (error) {
                return res.json({'message': error.message}).status(422)
            }

            const item = await this._model.findByPk(req.params.id);

            if (!item) {
                return res.status(404).json({error: 'Item not found'});
            }

            await item.destroy();

            return res.status(204).end();
        } catch (error) {
            console.error(error)
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export default BaseController;
