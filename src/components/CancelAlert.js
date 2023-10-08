import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

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
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Cancel Alert</Alert.Heading>
        <p>
          Are you sure you want to cancel? All changes will be lost.
        </p>
        <Button onClick={handleNo} >No</Button>
        <Button onClick={handleYes}>Yes</Button>
      </Alert>
    );
  }
  // return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default CancelAlert