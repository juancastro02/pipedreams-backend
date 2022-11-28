import { Schema, model } from "mongoose";

const waitersSchema = new Schema(
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

export default model("Waiters", waitersSchema);