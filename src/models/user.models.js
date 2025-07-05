/*
  id string pk
  username string
  email string
  fullName string
  avatar string
  coverImage string
  watchHistory ObjectId[] videos
  password string
  refreshToken string
  createdAt Date
  updatedAt Date 
*/

import mongoose, {Schema} from "mongoose";

// if not destructured i.e {Schema} above.
// const userSchema = new mongoose.Schema()

const userSchema = new Schema(
  {
    username: String,
  }
)

export const User = mongoose.model("User", userSchema)