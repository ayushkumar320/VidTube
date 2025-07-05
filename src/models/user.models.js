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
    // username: String,
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    emial: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // coudinary URL
      required: true,
    },
    coverImage: {
      type: String, // coudinary URL
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is required!"],
    },
    refreshToken: {
      type: String,
    },
  },
  {timestamps: true}
);

export const User = mongoose.model("User", userSchema);
