const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
  if (req.body.password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashedPassword;
  }

  next();
};
