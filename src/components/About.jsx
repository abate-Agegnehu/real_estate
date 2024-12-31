import React from "react";
import { assets } from "../assets/assets";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      id="About"
    
      style={{
        display: "flex",
        textAlign: "center",
        padding: "80px 6px",
        flexDirection:"column",
        justifyContent:"center",
        width: "100%",
        overflow: "hidden",
      }}
      
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textAlign: "center",
        }}
      >
        About{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "gray",
            textDecorationThickness: 2,
            textDecorationColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Our Brand
        </span>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        sx={{ mb: 6, maxWidth: "80%", mx: "auto" }}
      >
        Passionate about properties, Dedicated to your visions
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src={assets.brand_img}
            alt="Our Brand"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 4,
            }}
          >
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium", color: "gray" }}
              >
                10+
              </Typography>
              <Typography variant="body1">Years of Excellence</Typography>
            </Paper>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium", color: "gray" }}
              >
                12+
              </Typography>
              <Typography variant="body1">Projects Completed</Typography>
            </Paper>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium", color: "gray" }}
              >
                20+
              </Typography>
              <Typography variant="body1">Mn. Sq. Ft. Delivered</Typography>
            </Paper>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "medium", color: "gray" }}
              >
                25+
              </Typography>
              <Typography variant="body1">Ongoing Projects</Typography>
            </Paper>
          </Box>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: "text.secondary",
              marginTop: "20px",
              maxWidth: 600,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quam esse commodi cumque, necessitatibus ipsam id repudiandae
            ratione reiciendis provident veniam, ipsum, amet porro ea cum
            praesentium aliquam cupiditate placeat.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              paddingX: 4,
              paddingY: 1,
              borderRadius: "50px",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default About;
