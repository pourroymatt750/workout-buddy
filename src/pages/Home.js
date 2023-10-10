import React, { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "https://workout-buddy-backend-chyp.onrender.com/api/workouts/api/workouts"
        );
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const json = await response.json();
        dispatch({ type: "SET_WORKOUTS", payload: json });
        setLoading(false);
      } catch (error) {
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          console.log("Network error:", error.message);
        } else {
          console.log("Error fetching workouts:", error.message);
        }
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  const handleUpdateSubmit = (updatedWorkoutData) => {
    const updatedWorkouts = workouts.map((workout) =>
      workout._id === updatedWorkoutData._id ? updatedWorkoutData : workout
    );
    dispatch({ type: "SET_WORKOUTS", payload: updatedWorkouts });
  };

  return (
    <div className="home">
      {loading ? (
        <p>Workouts loading...</p>
      ) : (
        <>
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => (
                <WorkoutDetails
                  key={workout._id}
                  workout={workout}
                  onUpdate={handleUpdateSubmit}
                />
              ))}
          </div>
          <div className="workout-form">
            <WorkoutForm />
          </div>
        </>
      )}
    </div>
  );
  
}

export default Home;
