let User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let changePasswordController = async (req, res) => {
  let { token, password } = req.body;
  jwt.verify(token, "123", async function (err, decoded) {
    console.log(decoded.email); // bar

    bcrypt.hash(password, 10, async function (err, hash) {
      let existingUser2 = await User.updateOne(
        { email: decoded.email },
        {
          password: hash,
          token: "",
        },
        {
          returnNewDcoument: true,
          new: true,
          strict: false,
        }
      );
    });
  });
  console.log(token, password);

  // if (data[0].otp == otp) {
  //     await User.findOneAndUpdate({ email: email }, { otp: "", verify: true })
  //     res.send({ success: "OTP matched" })
  // } else {
  //     res.send("OTP does not match")
  // }
};

module.exports = changePasswordController;
