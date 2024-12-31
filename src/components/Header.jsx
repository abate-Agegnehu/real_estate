import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Typography } from "@mui/material";

const Header = () => {
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

      <Box
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
            mb: 4,
          }}
        >
          Explore homes that fit your dreams
        </Typography>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
          <Button
            variant="outlined"
            sx={{
              paddingX: 6,
              paddingY: 1,
              borderRadius: "8px",
              color: "white",
              borderColor: "white",
            }}
            href="#Projects"
          >
            Projects
          </Button>
          <Button
            variant="contained"
            sx={{
              paddingX: 6,
              paddingY: 1,
              borderRadius: "8px",
              backgroundColor: "#007bff",
            }}
            href="#Contact"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
