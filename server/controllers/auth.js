import User from '../models/user';
import { hashPassword, comparePassword } from '../helpers/auth';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    // console.log(req.body )
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: 'Name is required',
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: 'Password is required and should be at least 6 characters',
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: 'Email already exist',
      });
    }

    const hashedPassword = await hashPassword(password);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      const { password, ...rest } = user._doc;
      return res.json({ token, user: rest });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    // check email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        error: 'Email does not exist',
      });
    }

    // check password
    const isMatch = await comparePassword(req.body.password, user.password);
    if (!isMatch) {
      return res.json({
        error: 'Password is incorrect',
      });
    }

    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password, ...rest } = user._doc;

    res.json({ token, user: rest });
  } catch (err) {
    confirm.log(err);
  }
};
