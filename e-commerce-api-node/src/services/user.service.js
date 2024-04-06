const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");
const createUser = async (userData) => {
  try {
    let { FirstName, LastName, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user alrady exist in this email :", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ FirstName, LastName, email, password });

    console.log("Create User ", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error("user not found with this id", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with this email", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId);
    if (!user) {
      throw new Error("user not found with this id", userId);
    }
    return user;

    console.log("user ", user);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserByEmail,
  getAllUsers,
  getUserProfileByToken,
};
