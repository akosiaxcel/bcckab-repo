import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../assets/img/1.png"; // Update the path to your banner images
import bannerImage2 from "../assets/img/2.png";
import bannerImage3 from "../assets/img/3.png";
import missionImage from "../assets/img/img1.png"; // Update the path to your mission image
import communityImage from "../assets/img/community.png"; // Update the path to your community image
import eventImage2 from "../assets/img/kainos-seminar.jpg";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#333",
        fontFamily: "Proxima Nova, Helvetica",
      }}
    >
      {/* Carousel Banner Section */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div style={{ position: "relative" }}>
          <img src={bannerImage1} alt="Banner 1" />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xs: "40%", md: "50%" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              textAlign: "center",
              width: "100%",
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
              Welcome to BCC
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to="/about"
              sx={{ mt: 2 }}
            >
              Learn More
            </Button>
          </Box>
        </div>
        <div style={{ position: "relative" }}>
          <img src={eventImage2} alt="Banner 2" />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xs: "40%", md: "50%" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              textAlign: "center",
              width: "100%",
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
              Upcoming Events
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to="/events"
              sx={{ mt: 2 }}
            >
              Know More
            </Button>
          </Box>
        </div>
        <div style={{ position: "relative" }}>
          <img src={bannerImage3} alt="Banner 3" />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xs: "40%", md: "50%" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              textAlign: "center",
              width: "100%",
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
              Listen to Our Sermons
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to="/sermons"
              sx={{ mt: 2 }}
            >
              Watch Now
            </Button>
          </Box>
        </div>
      </Carousel>

      {/* Mission Section */}
      <Container sx={{ py: 6, mt: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <img
                src={missionImage}
                alt="Our Mission"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography variant="h4" component="h2" gutterBottom>
                Our Family
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to Bethesda, a place where faith comes alive, and hearts
                are transformed. At the core of our community is a deep belief
                in the Bible’s teachings, guiding us to commune with God and
                live by its authentic and timeless principles.<br></br>
                <br></br> We cherish strong family values and strive to create
                an environment where everyone feels a sense of belonging. Join
                us on this spiritual journey as we embrace the good news of
                hope, love, and redemption. Together, let’s grow in faith, build
                meaningful connections, and experience the transformative power
                of God’s grace.
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/about"
                sx={{ mt: 2 }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Community Section */}
      <Box sx={{ backgroundColor: "#eee", py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                  Join Our Community
                </Typography>
                <Typography variant="body1" gutterBottom>
                  We believe in building a strong, supportive community where
                  everyone is welcome. Get involved in our events, groups, and
                  volunteer opportunities.
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to="/activities"
                  sx={{ mt: 2 }}
                >
                  Get Involved
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={communityImage}
                  alt="Community"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Where to Find Us Section */}
      <Box sx={{ py: 6, backgroundColor: "#fff", textAlign: "center" }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Where to Find Us
          </Typography>
          {/* Embedded Map */}
          <Box
            sx={{ width: "100%", height: 400, marginTop: 2, borderRadius: 8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.207157792759!2d122.81096007503119!3d9.999740090105643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa326ffad21a1f%3A0x5648650a855a973e!2sBethesda%20Christian%20Church!5e0!3m2!1sen!2sph!4v1695115019283!5m2!1sen!2sph"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
