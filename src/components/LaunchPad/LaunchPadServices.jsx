import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services from "../homeComponents/Services";
import { responsive } from "@/data/CarouselResponsive";
import ServiceCard from "../homeComponents/ServiceCard";
import { padservices } from "@/data/services";
import Reveal from "@/utils/motion/Reveal";

const LaunchPadServices = ({ slider }) => {
  return (
    <React.Fragment>
      <Reveal>
        <Box
          textAlign="center"
          width={{ xs: "100%", md: "65%" }}
          sx={{ margin: "100px auto 5px", textAlign: "center" }}
        >
          <Chip
            sx={{
              bgcolor: "#fff",
              fontSize: "18px",
              fontFamily: "Outfit",
              color: "#0EAD69",
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
            Our Services
          </Typography>
        </Box>
      </Reveal>
      {/* desktop or larger devices */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: "20px",
          borderRadius: "40px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {padservices.map((service, index) => (
          <Services key={index} service={service} />
        ))}
      </Box>
      {/* mobile devices */}
      {slider ? (
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {padservices.map((service) => (
              <div key={service.id}>
                <ServiceCard data={service} />
              </div>
            ))}
          </Carousel>
        </Box>
      ) : (
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {padservices.map((service) => (
            <div key={service.id}>
              <ServiceCard data={service} />
            </div>
          ))}
        </Box>
      )}
    </React.Fragment>
  );
};

export default LaunchPadServices;
