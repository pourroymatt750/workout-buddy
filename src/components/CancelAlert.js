import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function CancelAlert({ isUpdating, setIsUpdating, isCancelAlertVisible, setIsCancelAlertVisible }) {
  const [show, setShow] = useState(true);

  const handleNo = () => {
    setShow(false)
    setIsCancelAlertVisible(false)
  }

  const handleYes = () => {
    setIsUpdating(false)
    setShow(false)
    setIsCancelAlertVisible(false)
  }

  if (show) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Cancel Alert</Alert.Heading>
        <p>
          Are you sure you want to cancel? All changes will be lost.
        </p>
        <button id="cancel-no-btn" onClick={handleNo} >No</button>
        <button id="cancel-yes-btn" onClick={handleYes}>Yes</button>
      </Alert>
    )
  }
}

export default CancelAlert