import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const DeleteAlert = () => {
  const [show, setShow] = useState(true)

  const handleDelete = () => {
    
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Delete Alert</Alert.Heading>
        <p>
          Are you sure you want to delete this workout? All workout information will be lost.
        </p>
        <button id="cancel-no-btn">No</button>
        <button id="cancel-yes-btn">Yes</button>
      </Alert>
    )
  }
}

export default DeleteAlert