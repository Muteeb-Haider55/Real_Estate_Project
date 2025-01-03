import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashpassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    console.log(error);

    next(error);
  }
};
