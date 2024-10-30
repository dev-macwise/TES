import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UpdateUser from "./pages/UpdateUser";
import Report from "./pages/Report";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";
import Support from "./pages/Support";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />}>
            <Route path="reports" element={<Report />} />
            <Route path="orders" element={<Orders />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path='profile' element={<Profile />} />
          <Route path='updateuser' element={<UpdateUser />} />
        </Routes>
      </Router>
    </>


  );
}

export default App;


