import { useEffect, useState } from "react"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts')
        if (!response.ok) {
          throw new Error('Network response was not okay')
        }
        const json = await response.json()
        setWorkouts(json)
      } catch (error) {
        console.log('Error fetching workouts: ', error)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home