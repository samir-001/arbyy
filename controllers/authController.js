const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');
var jwt = require('jsonwebtoken');

console.log(process.env.PORT) 

const router = express.Router();

exports.login = router.post('/login', async (req, res) => {
  const { name, password } = req.body;
console.log(name,password)
  // Check if the username exists.
  const user = await User.findOne({ name });
  if (!user) {
      res.status(401).send('Invalid username or password.');
      return;
    }

  // Compare the password entered with the hashed password in the database.
  const isValidPassword = await bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    res.status(401).send('Invalid username or password.');
    return;
  }

  // Create a JWT token for the user.
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  
  // Send the token back to the client.
  res.status(200).send({ token });
});

