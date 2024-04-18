const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  checkToken
};

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user)
  res.json(req.exp);
}

// Helper functions
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "user not found" });
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch)
      return res.status(403).json({ error: "password doesnt match" });
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
}
