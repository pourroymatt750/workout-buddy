import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);
