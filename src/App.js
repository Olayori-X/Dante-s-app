import './App.css';
import './style.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Order from './Pages/Order';
import Product from './Pages/Product';
import Settings from './Pages/settings/Settings';
import SettingsRoutes from './Pages/settings/SettingsRoutes';
import { AuthProvider } from './Components/AuthContext';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" Component={Login}></Route>
            <Route exact path="/dashboard" Component={Dashboard}></Route>
            <Route exact path="/order" Component={Order}></Route>
            <Route exact path="/product" Component={Product}></Route>          
            <Route path="settings" element={<Settings />} />
            <Route path="settings/*" element={<SettingsRoutes />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
