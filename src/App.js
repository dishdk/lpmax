import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signin from './Components/Login/signin';
import Main from './Components/main';
import Order from './Components/Login/order';
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/order" element={<Order/>} />
    </Routes>
  </Router>
  );
}

export default App;
