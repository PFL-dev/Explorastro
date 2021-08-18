const { Exploration } = require("../models");
const { errorMessage } = require("../constants");
const { Op } = require("sequelize");

module.exports = {
  getInformations: async (req, res) => {
    const { id } = req.params;
    const exploration = await Exploration.findByPk(id, {
      include: { all: true },
    });

    if (!exploration) {
      res.status(404).json({
        message: errorMessage.EXPLORATION_NOT_FOUND,
      });
    }

    res.json(exploration);
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({
          message: errorMessage.MISSING_EXPLORATION_NAME,
        });
      }

      const numberOfExplorations = await Exploration.count({
        where: {
          [Op.and]: [
            { author_id: req.user.id },
            {
              date: {
                [Op.or]: {
                  [Op.gt]: new Date(),
                  [Op.eq]: null,
                },
              },
            },
          ],
        },
      });

      if (numberOfExplorations >= 10) {
        return res.status(400).json({
          message: errorMessage.EXPLORATION_LIMIT_REACHED,
        });
      }

      const exploration = new Exploration({
        name,
        author_id: req.user.id,
        ...req.body,
      });

      await exploration.save();

      res.json(exploration);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const lgt = req.body.location?.lgt;
      const lat = req.body.location?.lat;

      const exploration = await Exploration.findByPk(id);

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      // We need to remove the information from the body that could corrupt the database record
      delete req.body.id;
      delete req.body.author_id;
      delete req.body.created_at;
      delete req.body.updated_at;

      await exploration.update({
        ...req.body,
        geog: {
          type: "Point",
          coordinates: [lgt, lat],
        },
      });

      res.status(200).json({
        exploration,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const exploration = await Exploration.findByPk(id);

      if (!exploration) {
        return res.status(404).json({
          message: errorMessage.EXPLORATION_NOT_FOUND,
        });
      }

      await exploration.destroy();

      res.status(200).json({ OK: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: errorMessage.INTERNAL_ERROR,
      });
    }
  },
};
