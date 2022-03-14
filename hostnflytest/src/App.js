import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//components
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route 
      path="details/:name" 
      element={<Details />} />            
      </Routes>
    </Router>
  );
}

export default App;
