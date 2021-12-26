
import './App.css';
import About from './pages/About';
import Project from './pages/Project';
import Home from './pages/Home';
import {
  Routes,
  Route
} from "react-router-dom";
// import Talk from './pages/Talk';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={ <About /> } />
      <Route path="/work" element={ <Project /> } /> 
      {/* <Route path="/talk" element={ <Talk /> } />  */}
    </Routes>
    </div>
  );
}

export default App;
