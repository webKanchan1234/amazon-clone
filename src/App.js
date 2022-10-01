import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Nav from './component/Nav/Nav';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Nav/>
      
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
