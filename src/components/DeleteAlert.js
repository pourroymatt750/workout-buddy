import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const DeleteAlert = ({ isDeleteAlertVisible, setIsDeleteAlertVisible, workout, dispatch }) => {
  const [show, setShow] = useState(true)

  const handleNo = () => {
    setShow(false)
    setIsDeleteAlertVisible(false)
  }

  const handleYes = async () => {
    const response = await fetch('/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Delete Alert</Alert.Heading>
        <p>
          Are you sure you want to delete this workout? All workout information will be lost.
        </p>
        <button onClick={handleNo} id="delete-no-btn">No</button>
        <button onClick={handleYes} id="delete-yes-btn">Yes</button>
      </Alert>
    )
  }
}

export default DeleteAlert