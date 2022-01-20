const { Category } = require('../models');

class Controller {
    static async getCategories(req, res, next) {
        try {
            const response = await Category.findAll()
            res.status(200).json({response});
        } catch (err) {
            console.log(err);
        }
    }

    static async addCategory(req, res, next) {
        try {
            const data = {
                name: req.body.name,
            }
            const response = await Category.create(data);
            res.status(201).json({response});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async findCategoryById(req, res, next) {
        try {
            const { categoryId } = req.params;
            const response = await Category.findByPk(categoryId);
            res.status(200).json({response});
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }

    static async editCategory(req, res, next) {
        try {
            const { categoryId } = req.params;
            const foundCategory = await Category.findByPk(categoryId);
            if(!foundCategory) {
                throw {name: 'NotFound'}
            }

            const data = {
                name: req.body.name
            }

            const response = await Category.update(data, {
                where: {
                    id: categoryId
                },
                returning: true
            })
            res.status(200).json({edited: response[1][0]})
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            const { categoryId } = req.params;
            const foundCategory = await Category.findByPk(categoryId);
            if(!foundCategory) {
                throw {name: 'NotFound'}
            }

            await Category.destroy({
                where: {
                    id: categoryId,
                }
            })
            res.status(200).json({
                message: `Deleted category ${foundCategory.name} from the list`
            })
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = Controller;