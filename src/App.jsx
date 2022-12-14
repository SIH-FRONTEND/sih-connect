import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

//imported wrapper
import Layout from "./components/Layout/Layout";

//imported pages
import HomePage from "./pages/HomePage";
import DeveloperProfile from "./pages/DeveloperProfile";
import PageNotFound from "./pages/PageNotFound";
import Register from "./components/register/Register";
import EditProfile from "./pages/EditProfile";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./components/change-password/ChangePassword";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<DeveloperProfile />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
