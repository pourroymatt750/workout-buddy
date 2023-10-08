import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import React, { useState } from 'react';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout, onUpdate }) => {
  const { dispatch } = useWorkoutsContext()
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedWorkout, setUpdatedWorkout] = useState({
    title: workout.title,
    load: workout.load,
    reps: workout.reps
  })

  const handleDeleteClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  const handleUpdateClick = () => {
    setIsUpdating(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUpdatedWorkout({ ...updatedWorkout, [name]: value })
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWorkout),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not okay');
      }

      onUpdate(updatedWorkout)
      dispatch({ type: 'UPDATE_WORKOUT', payload: updatedWorkout });
      setIsUpdating(false);

    } catch (error) {
      console.log('Error updating workout: ', error);
    }
  };
  

  return (
    <div className="workout-details">
      <h4>{updatedWorkout.title}</h4>
      <p><strong>Load: </strong>{updatedWorkout.load}</p>
      <p><strong>Reps: </strong>{updatedWorkout.reps}</p>
      {isUpdating ? (
        <form onSubmit={handleUpdateSubmit}>
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
      ) : (
        <>
          <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
          <span className='material-symbols-outlined' onClick={handleDeleteClick}>delete</span>
          <button className='update-btn' onClick={handleUpdateClick}>Update</button>
        </>
      )}
    </div>
  )
}

export default WorkoutDetails
