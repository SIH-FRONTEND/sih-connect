import { Route, Routes } from "react-router-dom";

//imported wrapper
import Layout from "./components/Layout/Layout";

//imported pages
import HomePage from "./pages/HomePage";
import DeveloperProfile from "./pages/DeveloperProfile";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<DeveloperProfile />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
