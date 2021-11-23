import { BrowserRouter, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';
import Header from './Components/header';
import Memegenerator from './Components/memegenerator';




function App() {
  return (
    <BrowserRouter>
    <Header></Header>
<Route path = "/signup" component ={Signup} />
<Route path = "/login" component ={Login} />
<Route path = "/memegenerator" component ={Memegenerator} />



</BrowserRouter>
  );
}

export default App;
