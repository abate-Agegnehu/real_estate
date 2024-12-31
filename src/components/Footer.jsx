import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { assets } from "../assets/assets";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
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
        pt: 10,
        px: { xs: 0, md: 2, lg: 2 },
        background: "rgba(148, 147, 147, 0.5)",
        width: "100%",
      }}
    >
      <Grid
        container
        sx={{
          padding: "15px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: "center", mb: { xs: 8, md: 0 } }}
        >
          <img
            src={assets.logo_dark}
            alt="Logo"
            style={{ width: "80px", height: "80px" }}
          />
          <Typography
            sx={{ color: "text.secondary", mt: 4, textAlign: "left" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            adipisci omnis ullam labore cumque commodi maiores fugiat, debitis
            harum, nihil incidunt aut explicabo nulla tempora repellat quidem
            nemo asperiores aspernatur!
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", mb: 4 }}
          >
            Company
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              color: "text.secondary",
              alignItems: "center",
            }}
          >
            <ScrollLink
              to="Header"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
            >
              <Button sx={{ color: "gray", ":hover": { color: "white" } }}>
                Home
              </Button>
            </ScrollLink>
            <ScrollLink
              to="About"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
            >
              <Button sx={{ color: "gray", ":hover": { color: "white" } }}>
                About
              </Button>
            </ScrollLink>
            <ScrollLink
              to="Contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
            >
              <Button sx={{ color: "gray", ":hover": { color: "white" } }}>
                Contact
              </Button>
            </ScrollLink>
            <ScrollLink
              to=""
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
            >
              <Button sx={{ color: "gray", ":hover": { color: "white" } }}>
                Privacy Policy
              </Button>
            </ScrollLink>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", mb: 4 }}
          >
            Subscribe to our newsletter
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: 345,
              mx: "auto",
              textAlign: "left",
            }}
          >
            The latest news. articles, and resources, sent to your inbox weekly.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Enter Your Email"
              sx={{
                bgcolor: "gray.800",
                color: "text.secondary",
                width: "100%",
                md: "auto",
              }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "primary.main", padding: "5px 10px" }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: 1,
          borderColor: "gray.700",
          py: 4,
          textAlign: "center",
          color: "text.secondary",
          cursor: "pointer",
          "&:hover": { color: "white" },
        }}
      >
        Copyright 2025 @ Arinona. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
