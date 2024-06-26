import React from "react";
import { alpha } from "@mui/system";
import ScrollReveal from "@/utils/motion/ScrollReveal";
import { Box, Grid, Typography, CardMedia } from "@mui/material";

const AboutCard = ({ datas }) => {
  return (
    <Box sx={{ margin: "0 auto", textAlign: "center" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {datas.map((project, idx) => (
          <Grid item xs={2} sm={4} md={6} key={project.id}>
            <ScrollReveal index={idx}>
              <Box
                sx={{
                  p: { xs: 1, md: 3 },
                  flexDirection: "column",
                  bgcolor: alpha("#fff", 0.1),
                  height: "312px",
                  borderRadius: "20px",
                  border: "1px solid #5c5c5c",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.icon}
                  sx={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                    mb: 2,
                  }}
                  alt="icon"
                />
                <Typography
                  my={{ xs: 1, md: 4 }}
                  variant="body"
                  sx={{ fontSize: { xs: "32px", md: "56px" } }}
                >
                  {project.title}
                </Typography>
                <Typography
                  my={2}
                  variant="body2"
                  sx={{
                    fontSize: { xs: "18px", md: "22px", textAlign: "left" },
                    color: "#D0D0D0",
                  }}
                >
                  {project.desc}
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCard;
