import React, { useState } from "react";

const WorkoutUpdate = ({ workout, onUpdate }) => {
  const [updatedWorkout, setUpdatedWorkout] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUpdatedWorkout({ ...updatedWorkout, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/workouts/' + workout._id,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedWorkout)
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error('Network response was not okay')
      }
        
      const updatedWorkoutData = await response.json()
      onUpdate(updatedWorkoutData) // Update the workout in the local state
    } catch (error) {
      console.log('Error updating workout: ', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={updatedWorkout.title}
        onChange={handleInputChange}
      />
      <label htmlFor="load">Load:</label>
      <input
        type="text"
        id="load"
        name="load"
        value={updatedWorkout.load}
        onChange={handleInputChange}
      />
      <label htmlFor="reps">Reps:</label>
      <input
        type="text"
        id="reps"
        name="reps"
        value={updatedWorkout.reps}
        onChange={handleInputChange}
      />
      <button type="submit">Update Workout</button>
    </form>
  )
}

export default WorkoutUpdate