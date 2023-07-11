module.exports = (schema) => async (req, res, next) => {
    try {
      await schema.validate({
        name: req.body.name,
        password: req.body.password,
      });
      return next();
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };