import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';


// const Home = () => <h1>Home Page</h1>
// const AboutUs = () => <h1>About Us</h1>
function App() {
  
  return (
  //  <Routes>
  //   <Route exact path="/" element={<Home/>} />
  //   <Route path="/about" element={<AboutUs/>} />
  //  </Routes>
  <div className="App">
  <TodoList />
  </div>
    
  );
  
}

export default App;
