import "./App.css";
import Header from "./pages/header/header";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./pages/footer/footer";
import ImageDetail from "./pages/media/media-detail/image-detail";
import SignIn from "./pages/login/login";
import Register from "./pages/register/register";
import Media from "./pages/media/media";
import AudioDetail from "./pages/media/media-detail/audio-detail";
import ProtectedRoute from "./utility/ProtectedRoute";

const App: React.FC = () => {
  const [headerParams, setHeaderParams] = useState({
    searchParam: "random",
    filter: {
      mediaType: "image",
    },
    username: "",
  });
  const checkHeaderValue = (e: any) => {
    if ("string" === typeof e)
      setHeaderParams({
        ...headerParams,
        searchParam: e,
      });
    else {
      setHeaderParams({
        ...headerParams,
        filter: e,
      });
    }
  };

  function Authentication() {
    const token = localStorage.getItem("token") || "";
    return token.length > 0;
  }

  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        width={"100%"}
      >
        <Header onSearchChange={checkHeaderValue} />
        <div className="flex flex-row bg-white min-h-[1000px]">
          <Routes>
            <Route
              path="/images/:id"
              element={
                <ProtectedRoute authenticated={Authentication()}>
                  <ImageDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute authenticated={Authentication()}>
                  <Media headerParams={headerParams} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/audios/:id"
              element={
                <ProtectedRoute authenticated={Authentication()}>
                  <AudioDetail />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logup" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
