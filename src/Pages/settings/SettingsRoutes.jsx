import ManageProfile from "./ManageProfile";
import { Routes, Route, useMatch } from 'react-router-dom';

const SettingsRoutes = () => {
    // const match = useMatch('/settings/*');

    return (
        <Routes>
            <Route index path="/" />
            <Route path="profile" element={<ManageProfile />} />
            {/* <Route path="security" element={<Security />} />
            <Route path="notifications" element={<Notifications />} /> */}
        </Routes>
    );
  };
  
  export default SettingsRoutes;