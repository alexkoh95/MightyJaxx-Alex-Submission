import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./Private-Route";

import EntryPage from "./components/Signin-Signup/Entry-Page";
import Signin from "./components/Signin-Signup/Signin";
import Signup from "./components/Signin-Signup/Signup";
import HomePage from "./components/Navbar/Home-Page";
import Dashboard from "./components/Admin-Dashboard/Dashboard";
import AddItems from "./components/Admin-Dashboard/Add-Items";
import Signout from "./components/Signin-Signup/Signout";
import ModifyItems from "./components/Admin-Dashboard/Modify-Items";

function App() {
  return (
    <Router>
      <div className="App bg-gray-900 min-h-screen">
        <main>
          <Routes>
            <Route path="/" exact element={<EntryPage />}></Route>
            <Route path="/signin" exact element={<Signin />}></Route>
            <Route path="/signup" exact element={<Signup />}></Route>
            <Route path="/homepage" exact element={<HomePage />}></Route>
            <Route path="/signout" exact element={<Signout />}></Route>
            <Route exact path="" element={<PrivateRoute />}>
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="additems" element={<AddItems />} />
              <Route exact path="modifyitems/:sku" element={<ModifyItems />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
