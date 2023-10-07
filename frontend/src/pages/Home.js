import { useEffect } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts')
        if (!response.ok) {
          throw new Error('Network response was not okay')
        }
        const json = await response.json()
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      } catch (error) {
        console.log('Error fetching workouts: ', error)
      }
    }
    fetchWorkouts()
  }, [dispatch])

  const handleUpdate = (updatedWorkout) => {
    // Update the local state with the updated workout
    const updatedWorkouts = workouts.map((workout) =>
      workout._id === updatedWorkout._id ? updatedWorkout : workout
    );
    dispatch({ type: 'SET_WORKOUTS', payload: updatedWorkouts });
  };

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              onUpdate={handleUpdate} // Pass the update handler to WorkoutDetails
            />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
