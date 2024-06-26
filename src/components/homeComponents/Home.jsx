import React from "react";
import PageSection from "../common/PageSection";

const Home = () => {
  const sectionDetails = {
    id: 1,
    title: "AestroHub",
    subtitle:
      "We're not just an agency, we're a launchpad. A cross-functional, all-in-one service provider for everything you need to propel your Web3 project to the stars.",
    btnText: "Explore our station",
    destination: "/services",
    img: "/images/image1.webp",
    config: {
      img: {
        my: 3,
        height: "631.95px",
        objectFit: "contain",
        transform: "rotate(180deg)",
        borderRadius: "50%",
      },

      btn: {
        width: "200px",
        height: "50px",
      },
    },
  };

  return (
    <React.Fragment>
      <PageSection button sectionDetails={sectionDetails} />
    </React.Fragment>
  );
};

export default Home;
