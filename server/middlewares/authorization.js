const { User } = require("../models/index");

const userAuthorization = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    const userId = req.user.id;
    const userRole = req.user.role;

    // note dari ihza: kayaknya yg dibawah ini parameternya userId bukan targetId
    const user = await User.findByPk(targetId)
        if (!user) {
            throw({name: 'notFound'})
        }

        if (userRole !== 'admin') {
            if (user.id !== userId) {
                throw({name: 'unauthorized'})
            }
        }

        next()
  } catch (err) {
    console.log(err);
    // res.status(500).json(err)
    next(err);
  }
};

module.exports = userAuthorization
