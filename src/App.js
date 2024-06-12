import './App.css';
import './style.css';
import Login from './Pages/seller/Login';
import Dashboard from './Pages/seller/Dashboard';
import Order from './Pages/seller/Order';
import Product from './Pages/seller/Product';
import Settings from './Pages/seller/Settings';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" Component={Login}></Route>
          <Route exact path="/seller/dashboard" Component={Dashboard}></Route>
          <Route exact path="/seller/order" Component={Order}></Route>
          <Route exact path="/seller/product" Component={Product}></Route>
          <Route exact path="/seller/settings" Component={Settings}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
