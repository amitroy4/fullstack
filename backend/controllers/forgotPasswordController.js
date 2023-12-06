let User = require("../model/userSchema");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

const forgotPasswordController = async (req, res) => {
    let { email } = req.body
    let existingUser = await User.find({ email: email })
    console.log(existingUser);
    if (existingUser.length == 0) {
        res.send({ error: "credencial does not match" })
    } else {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: "amitroyrock6071@gmail.com",
                pass: "uyqs iuqm tldm amhe",
            },
        });

        const info = await transporter.sendMail({
            from: process.env.BASE_EMAIL, // sender address
            to: existingUser[0].email, // list of receivers
            subject: "Change Password", // Subject line
            html: `'<b>Please Change your password by clicking this <a href="http://localhost:5173/changepassword/${existingUser[0].email}">link</a></b>'`, // html body
        });
    }
}

module.exports = forgotPasswordController