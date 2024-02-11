let User = require("../model/userSchema");
const bcrypt = require("bcrypt");

let loginController = async (req, res) => {
  let { email, password } = req.body;
  let existingUser = await User.find({ email: email });
  // console.log(existingUser[0]);
  if (existingUser.length == 0) {
    res.send({ error: "credencial does not match" });
  } else {
    bcrypt.compare(password, existingUser[0].password, function (err, result) {
      //    console.log(result);
      if (result) {
        let data = {
          id: existingUser[0]._id,
          email: existingUser[0].email,
          name: existingUser[0].name,
          role: existingUser[0].role,
          verify: existingUser[0].verify,
        };
        console.log(data);
        res.send(data);
      } else {
        res.send({ error: "credencial does not match" });
      }
    });
  }
};

module.exports = loginController;
