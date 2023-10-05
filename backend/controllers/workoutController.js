const Workout = require('../models/workoutModel')

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })

  res.status(200).json(workouts)
} 

// get a single workout


// create a new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  // add document to DB
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// update a workout


module.exports = {
  createWorkout
}