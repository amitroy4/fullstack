let User = require("../model/userSchema")

let changePasswordController = async (req, res) => {
    let { email, password } = req.body
    let data = await User.find({ email: email })
    console.log(data[0].otp);
    // if (data[0].otp == otp) {
    //     await User.findOneAndUpdate({ email: email }, { otp: "", verify: true })
    //     res.send({ success: "OTP matched" })
    // } else {
    //     res.send("OTP does not match")
    // }
}

module.exports = changePasswordController