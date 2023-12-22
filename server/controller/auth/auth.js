const router = require("express").Router();
const User = require("../../models/user.js");
const jtoken = require("jsonwebtoken");

// assign the body's request to the user object
router.post("/login", async (req, res) => {
  const { userEmail, password } = req.body;
  console.log(userEmail, password);
  try {
    // take the destructured body and filter through User object for matching email
    const user = await User.findOne({
      where: { email: userEmail },
    });
    // error code handling based on response status
    if (!user) {
      return res.status(400).json({
        message: "Email not found!",
      });
    }

    // boolean value to check password validity before token creation
    const isValidPass = user.checkPassword(password);
    if (!isValidPass) {
      return res.status(401).json({
        message: "Invalid credentials!",
      });
    }

    console.log(user.id);
    // after user is verified create the webtoken
    // process.env.JWT_SECRETKEY and change res.cookie "JWT" before deployment
    const token = jtoken.sign(
      {
        userId: user.id,
        username: user.username,
      },
      "superdupersecret",
      {
        expiresIn: "1d",
      }
    );
 
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    res.cookie("JWT", token, {
      httpOnly: false,
      maxAge: oneDayInMilliseconds,
      secure: true, // Set this if served over HTTPS
      sameSite: 'Strict',
    });

    return res.status(200).json({ message: "Login Successful", jwt: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `${error}` });
  }
});

// POST /signUp
router.post("/signup", async (req, res) => {
  try {
    await User.create(req.body);
    return res.status(200).json({ message: `Welcome ${req.body.username}` });
  } catch (err) {
    if (err.original && err.original.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Email Already Exists" });
    } else {
      return res.status(400).json({ message: "Error signing up" });
    }
  }
});

module.exports = router;