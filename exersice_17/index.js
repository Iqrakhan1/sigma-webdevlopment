const express = require("express");
const mongoose = require("mongoose");
const app = express();

const employeeSchema = require("./models/employee");
mongoose.connect("mongodb://localhost:27017/company");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("main page");
});

const rendom = (input) => {
  return Math.floor(Math.random() * input.length);
};

const employeeName = ["iqra", "muskan", "mahvish", "arbaz", "julian"];
const employeeLanguage = ["javascript", "java", "python", ".net", "c++"];
const employeeCity = ["Bhopal", "kolkata", "indore", "delhi", "hydrabad"];

app.get("/employee", async (req, res) => {
  await employeeSchema.deleteMany({}); // Delete all existing employees

  for (let i = 0; i < 10; i++) {
    // Create a new employee with random values
    const newEmployee = new employeeSchema({
      name: employeeName[rendom(employeeName)], // Random name from the array
      language: employeeLanguage[rendom(employeeLanguage)], // Random language from the array
      salary: Math.floor(Math.random() * 45000), // Random salary between 0 and 45,000
      city: employeeCity[rendom(employeeCity)], // Random city from the array
      isManager: Math.random() > 0.5, // Random boolean for isManager
    });

    await newEmployee.save(); // Save the new employee to the database
  }

  res.send("10 random employees added.");
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
