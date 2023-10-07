import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import React, { useState } from 'react';
import WorkoutUpdate from './WorkoutUpdate';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const [isUpdating, setIsUpdating] = useState(false);

  const handleClick = async () => {
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
  
  const handleUpdate = async (updatedWorkoutData) => {
    setIsUpdating(false);
    console.log("(WorkoutDetails handleUpdate) Dispatching UPDATE_WORKOUT with payload:", updatedWorkoutData);
    dispatch({ type: 'UPDATE_WORKOUT', payload: updatedWorkoutData });
  };
  
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load: </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      {isUpdating ? (
        <WorkoutUpdate workout={workout} onUpdate={handleUpdate} />
      ) : (
        <>
          <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
          <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
          <button className='update-btn' onClick={handleUpdateClick}>Update</button>
        </>
      )}
    </div>
  )
}

export default WorkoutDetails
