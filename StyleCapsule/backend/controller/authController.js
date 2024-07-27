const auth = require('../model/authModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const signup = async (req, res) => {
    try {
        const { name, email, password, username, contactNumber } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const value = new auth({
            name: name,
            email: email,
            password: hashedPassword,
            username: username,
            contactNumber: contactNumber
        })

        await value.save();

        res.send('signed up successfully')

    } catch (error) {
        res.send("error", error);
    }


}

const login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const value = await auth.findOne({ email });
        // console.log(value);

        if (!value) {
            return res.status(404).json({ msg: "User not found" });
        }

        const hashedPassword = await bcrypt.compare(password, value.password);

        if (!hashedPassword) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        
        // console.log(abc); // for server error

        res.json({
            msg: "logged in successfully",
            data: value
        })



    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}

const sendEmail = async (req, res) => {
    try{
        const {email} = req.body.email;
        const user = await auth.find({email: email})
        if(!user){
            res.json({  
                msg: "user not found",
                status: 400
            })
        }
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        user.otp = otp;
        user.otpExpiration = Date.now() + 15 * 60 * 1000;
        await user.save();

        const mailDetails = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset OTP",
            html: `<p>Your OTP for password reset is: <strong>${otp}</strong></p><p>This OTP is valid for 15 minutes.</p>`
          };
      
          await mailTransporter.sendMail(mailDetails);
          res.status(200).json({ message: "OTP sent to your email" });

    } catch (error) {
        res.send("error", error);
    }
}

const verifyOtp = async (req, res) => {
    try{

        const {otp} = req.body;
        const user = await auth.findOne({otp, otpExpiration: { $gt: Date.now() }})

        if(!user){
            res.json({
                status: 400,
                msg: "otp expired"
            })
        }

        user.otp = undefined;
        user.otpExpiration = undefined;
        await user.save();

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h", // Example token expiry time
          });

        res.json({
            status: 200,
            token: token
        })

    } catch(error){
        res.send("error", error);
    }
}

const resetPassword = async (req, res, next) => {
    const token = req.body.token;
    const newPassword = req.body.newPassword;
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
      if (err) {
        return next(createError(500, "Password Reset Link is Expired!"));
      }
  
      try {
        const response = data;
        const users = await auth.findOne({ email: { $regex: '^' + response.email + '$', $options: 'i' } });
  
        if (!users) {
          return next(createError(404, "User not found!"));
        }
  
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        users.password = hashedPassword;
  
        const updatedUser = await auth.findByIdAndUpdate(
          users._id,
          { $set: { password: hashedPassword } },
          { new: true }
        );
  
        if (!updatedUser) {
          return next(createError(500, "Something went wrong while resetting the password!"));
        }
  
      } catch (error) {
        return next(createError(500, "Something went wrong while resetting the password!"));
      }
    });
    res.status(200).json({ message: "Password reset successful" });
  };

// reset password => email shi hai but password yaad nhi
// number => otp
// email => mail 

module.exports = { signup, login, sendEmail, verifyOtp, resetPassword };
