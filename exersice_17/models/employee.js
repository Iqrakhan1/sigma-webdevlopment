const mongoose = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = Schema({
  name: String,
  language: String,
  salary: Number,
  city: String,
  isManager: Boolean,
});

module.exports = mongoose.model("Employee", employeeSchema);
