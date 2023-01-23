import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

//imported wrapper
import Layout from "./components/Layout/Layout";

//imported pages
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Register from "./components/auth/Register";
import EditProfile from "./pages/EditProfile";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Techies from "./pages/Techies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/:id/edit-profile" element={<EditProfile />} />
          <Route path="/:id/profile" element={<ProfilePage />} />
          <Route path="/all-techies" element={<Techies />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
