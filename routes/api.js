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

router.put("/api/workouts/:id", ({ params, body }, res) => {
  console.log("PARAMS", body, params);
  Workout.findOneAndUpdate(
    { __id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
