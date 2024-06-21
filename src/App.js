import './App.css';
import './style.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Settings from './Pages/settings/Settings';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" Component={Login}></Route>
          <Route exact path="/dashboard" Component={Dashboard}></Route>
          <Route exact path="/order" Component={Order}></Route>
          <Route exact path="/product" Component={Product}></Route>
          <Route exact path="/settings/*" Component={Settings}></Route>
          {/* <Route path="/settings" element={<Navigate to="/settings/Settings" />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
