import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { Box, Typography, Grid, Avatar, Rating, Paper } from "@mui/material";

const Testimonials = () => {
  return (
    <Box id="Testimonials" sx={{ py: 10, px: { xs: 3, lg: 8 }, width: "100%" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 2, fontWeight: "bold" }}
      >
        Customer{" "}
        <span
          style={{
            fontWeight: "lighter",
            textDecoration: "underline",
            color: "gray",
            textDecorationThickness: 2,
            textDecorationColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Testimonials
        </span>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        sx={{ mb: 6, maxWidth: "80%", mx: "auto" }}
      >
        Real Stories from Those Who Found Home With Us
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonialsData.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.alt}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {testimonial.title}
              </Typography>
              <Rating
                value={testimonial.rating}
                precision={0.5}
                readOnly
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="textSecondary">
                {testimonial.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
