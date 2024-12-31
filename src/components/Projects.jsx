import React, { useState } from "react";
import { assets, projectsData } from "../assets/assets";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Screen size: small (xs)
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // Screen size: medium (sm - md)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // Screen size: large (lg+)

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentProject(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  // Determine how many items should be shown based on screen size
  const getGridItemWidth = () => {
    if (isSmallScreen) return 100; // 100% width for small screens
    if (isMediumScreen) return 50; // 50% width for medium screens (2 items per row)
    if (isLargeScreen) return 25; // 25% width for large screens (4 items per row)
    return 100;
  };

  const slideWidth = getGridItemWidth();

  return (
    <Box sx={{ py: 4, px: { xs: 3, md: 6 }, my: 8 }} id="Projects">
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 2, fontWeight: "bold", marginBottom: 2, textAlign: "center" }}
      >
        Projects{" "}
        <span
          style={{
            fontWeight: "lighter",
            textDecoration: "underline",
            color: "gray",
            textDecorationThickness: 2,
            textDecorationColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Completed
        </span>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        sx={{ mb: 4 }}
      >
        Crafting spaces, Building legacies - Explore Our Portfolio
      </Typography>

      {/* Arrow Navigation */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
        <IconButton onClick={handlePrevious} aria-label="Previous Project">
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={handleNext} aria-label="Next Project">
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Project Slider */}
      <Box sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentProject * slideWidth}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: `${slideWidth}%`, // Adjust width for each screen size
                flexShrink: 0, // Prevent items from shrinking
                paddingRight: "16px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 16,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "white",
                      width: "75%",
                      padding: 2,
                      borderRadius: "4px",
                      boxShadow: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.price} | {project.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
