import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TopSongsPage from "./pages/TopSongsPage";
import TopSingersPage from "./pages/TopSingersPage";
import SingerPage from "./pages/SingerProfile";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <ScaleLoader
            color={"#000000"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
            }}
          />
        ) : (
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/topsongs" element={<TopSongsPage />} />
              <Route path="/topsingers" element={<TopSingersPage />} />
              <Route path="/singer/:singerId" element={<SingerPage />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
