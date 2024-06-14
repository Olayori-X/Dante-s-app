import './App.css';
import './style.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Settings from './Pages/Settings';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" Component={Login}></Route>
          <Route exact path="/Dashboard" Component={Dashboard}></Route>
          <Route exact path="/Order" Component={Order}></Route>
          <Route exact path="/Product" Component={Product}></Route>
          <Route exact path="/Settings" Component={Settings}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
