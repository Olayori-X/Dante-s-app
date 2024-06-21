import ManageProfile from "./ManageProfile";
import Payment from "./Payment";
import ChangePassword from "./ChangePassword";
import { Routes, Route, useMatch } from 'react-router-dom';

const SettingsRoutes = () => {

    return (
        <Routes>
            <Route index path="/" />
            <Route path="profile" element={<ManageProfile />} />
            <Route path="payment" element={<Payment />} />
            <Route path="changepassword" element={<ChangePassword />} />
        </Routes>
    );
  };
  
  export default SettingsRoutes;