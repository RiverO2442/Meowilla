import "./App.css";
import Header from "./pages/header/header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Media from "./pages/media/media";
import Footer from "./pages/footer/footer";
import ImageDetail from "./pages/media/media-detail/media-detail";

const App: React.FC = () => {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        width={"100%"}
      >
        <Header />
        <div className="p-3 flex flex-row bg-white min-h-[1000px]">
          <Routes>
            <Route path="/" element={<Media />} />
            <Route path="/detail/:id" element={<ImageDetail />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
