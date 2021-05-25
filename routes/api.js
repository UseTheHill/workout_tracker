const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

router.post("/api/workouts", ({ body }, res) => {
Workout.create({})
.then((dbWorkout) => {
    res.json(dbWorkout);
})
.catch(({ message }) => {
    console.log(message);
});
});