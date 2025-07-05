/*
  id string pk
  owner ObjectId users
  videoFile string
  thumbnail string
  title string
  description string
  duration number
  views number
  isPublished boolean
  createdAt Date
  updatedAt Date
*/

import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    videoFile: {
      type: URL,
      required: true,
    }
  }
)

export const Video = mongoose.model("Video", videoSchema);