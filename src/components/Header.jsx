import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box, Button, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState) => () => {
    setOpen(openState);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        margin: "0",
        backgroundImage: "url('/header_img.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
      }}
      id="Header"
    >
      <Navbar />

      <motion.Box
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        sx={{
          textAlign: "center",
          mx: "auto",
          py: 4,
          px: { xs: 6, sm: 6, md: 20, lg: 32 },
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            maxWidth: "80%",
            fontWeight: "600",
            color:"white",
            mb: 4,
          }}
        >
          Explore homes that fit your dreams
        </Typography>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
          <ScrollLink
            to="Projects"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button
              variant="outlined"
              sx={{
                paddingX: 6,
                paddingY: 1,
                borderRadius: "8px",
                color: "white",
                borderColor: "white",
              }}
            >
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink
            to="Contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
          >
            <Button
              variant="contained"
              sx={{
                paddingX: 6,
                paddingY: 1,
                borderRadius: "8px",
                backgroundColor: "#007bff",
              }}
            >
              Contact Us
            </Button>
          </ScrollLink>
        </Box>
      </motion.Box>
    </Box>
  );
};

export default Header;
