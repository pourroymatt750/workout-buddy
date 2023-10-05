import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages & components
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
