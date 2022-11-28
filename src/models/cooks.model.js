import { Schema, model } from "mongoose";

const cooksSchema = new Schema(
  {
    monday: Array,
    tuesday: Array,
    wednesday: Array,
    thursday: Array,
    friday: Array,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Cooks", cooksSchema);