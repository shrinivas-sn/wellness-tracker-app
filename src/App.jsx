import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import History from "./pages/History.jsx";
import LogActivity from "./pages/LogActivity.jsx";
import NavPage from "./pages/NavPage.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logactivity" element={<LogActivity />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
