import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Chart from './pages/chart/chart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Chart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
