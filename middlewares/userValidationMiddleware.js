
module.exports = (schema) => async (req, res, next) => {
  const data = req.body
    try {
      await schema.validate(req.body );
      return next();
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };