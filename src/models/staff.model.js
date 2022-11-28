const { Schema, model } = require("mongoose");

const staffSchema = new Schema(
  {
    type: String,
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

module.exports = model("Staff", staffSchema);