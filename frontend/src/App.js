import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages & components
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Corrected the typo here */}
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter> {/* Corrected the typo here */}
    </div>
  );
}

export default App;
