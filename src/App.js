import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Yes from './pages/Yes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/yes" element={<Yes/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
