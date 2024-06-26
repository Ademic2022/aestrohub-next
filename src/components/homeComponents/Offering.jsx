import React from "react";
import { Box, Typography, CardMedia, Chip, Grid } from "@mui/material";
import CustomButton from "../common/CustomButton";
import ScrollReveal from "@/utils/motion/ScrollReveal";
import Reveal from "@/utils/motion/Reveal";

const Offering = () => {
  return (
    <React.Fragment>
      <Reveal>
        <Box
          // width={{ md: 1280 }}
          sx={{ margin: "100px auto 5px", textAlign: "center" }}
        >
          <Chip
            sx={{
              bgcolor: "#fff",
              fontSize: "18px",
              fontFamily: "Outfit",
              color: "#FF006E",
              padding: "5px",
              mb: "20px",
            }}
            icon={
              <CardMedia
                component="img"
                image="/icons/Saturn.webp"
                sx={{
                  width: 24,
                  height: 24,
                  objectFit: "contain",
                }}
                alt="icon"
              />
            }
            label="What we do"
          />
          <Typography
            mb={3}
            variant="h2"
            sx={{ fontSize: { xs: "32px", md: "56px" } }}
          >
            Our Offerings
          </Typography>
        </Box>
      </Reveal>
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            pr={{ md: 1, xs: 0 }}
            pb={{ md: 0, xs: 2 }}
          >
            <ScrollReveal type="first">
              <Box
                sx={{
                  backgroundImage: `url("/images/image4.webp")`,
                  filter: "grayscale(100%)",
                  backgroundSize: "cover",
                  height: { xs: "auto", md: "420px" },
                  pb: 5,
                  borderRadius: "20px",
                  border: "1px solid #5c5c5c",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    top: "20px",
                    width: "520px",
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "20px", md: 0 },
                  }}
                >
                  <Typography
                    mb={3}
                    textAlign="left"
                    variant="h2"
                    sx={{
                      fontSize: { xs: "32px", md: "56px" },
                      fontWeight: 600,
                    }}
                  >
                    One Man Service
                  </Typography>
                  <Typography
                    mb={3}
                    variant="body2"
                    textAlign="left"
                    lineHeight={1.2}
                    sx={{
                      fontSize: { xs: "16px", md: "22px" },
                      fontWeight: 400,
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 5)"
                    }}
                  >
                    We offer one-man and one-time service for your project. We
                    monitor and ensure full delivery of the service. Get a
                    single professional to work on your specific needs.
                  </Typography>
                  <CustomButton
                    btnText="Hire a Professional"
                    to="/contact-us"
                  />
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            pl={{ md: 1, xs: 0 }}
          >
            <ScrollReveal>
              <Box
                sx={{
                  backgroundImage: `url("/images/image4.webp")`,
                  filter: "grayscale(100%)",
                  backgroundSize: "cover",
                  height: { xs: "auto", md: "420px" },
                  pb: 5,
                  borderRadius: "20px",
                  border: "1px solid #5c5c5c",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    top: "20px",
                    width: "520px",
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "20px", md: 0 },
                  }}
                >
                  <Typography
                    mb={3}
                    textAlign="left"
                    variant="h2"
                    sx={{
                      fontSize: { xs: "32px", md: "56px" },
                      fontWeight: 600,
                    }}
                  >
                    Team Service
                  </Typography>
                  <Typography
                    mb={3}
                    variant="body2"
                    textAlign="left"
                    lineHeight={1.2}
                    sx={{
                      fontSize: { xs: "16px", md: "22px" },
                      fontWeight: 400,
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 5)"
                    }}
                  >
                    We offer cross-functional skills handled by the entire team
                    to work on your project. Our entire team across different
                    categories take over every aspect of your project.
                  </Typography>
                  <CustomButton btnText="Hire the team" to="/contact-us" />
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Offering;
