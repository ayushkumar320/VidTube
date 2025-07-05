/*
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
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, // cloudinary url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desription: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      defualt: 0,
    },
    duration: {
      type: Number,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: published,
    },
    owner: {
      type: Schema.Type.ObjectId,
      ref: "User",
    },
  },
  {timestamps: true}
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
