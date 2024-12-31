import React from "react";
import Header from "./components/Header";
import { Box } from "@mui/material";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Header />
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </Box>
  );
};

export default App;
