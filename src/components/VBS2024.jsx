import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Tooltip,
  SvgIcon,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { Link as LinkIcon } from "@mui/icons-material";
import eventImage1 from "../assets/img/2.png"; // Import the event banner images
import Contact from "../components/Contact";

const galleryItems = [
  { type: "image", src: eventImage1 },
  {
    type: "video",
    src: "../src/assets/vid/keepers-kingdom-promo-video-2 (1).mp4",
  },
  { type: "video", src: "../src/assets/vid/volunteer-recruitment-video.mp4" },
  { type: "video", src: "../src/assets/vid/VBS  (1).mp4" },
  { type: "image", src: eventImage1 }, // Add more image paths here
  { type: "image", src: eventImage1 }, // Add more image paths here
];

const FacebookIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.41 3.59 8.05 8.24 8.89v-6.29h-2.48v-2.48h2.48v-1.88c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.2.11v2.55h-1.51c-1.18 0-1.41.56-1.41 1.38v1.81h2.82l-.37 2.48h-2.45v6.29c4.65-.84 8.24-4.48 8.24-8.89 0-5.51-4.45-9.96-9.96-9.96z" />
  </SvgIcon>
);

const WhatsappIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M16.92 13.28c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.56.13-.13.28-.32.42-.49.14-.17.18-.28.28-.46.09-.18.05-.34-.02-.49-.08-.14-.61-1.47-.84-2.02-.22-.52-.44-.45-.61-.46-.16-.01-.34-.01-.52-.01-.18 0-.49.07-.75.34-.26.28-1 1-1 2.42 0 1.41 1.02 2.77 1.16 2.96.14.18 2.01 3.07 4.88 4.3.68.29 1.22.46 1.64.59.69.22 1.32.19 1.82.11.55-.08 1.64-.67 1.87-1.31.23-.63.23-1.17.16-1.31-.08-.14-.25-.22-.53-.36zM12.04 2.05c-5.51 0-9.96 4.45-9.96 9.96 0 1.76.46 3.42 1.27 4.88l-1.34 4.89 5.02-1.31c1.41.76 3.01 1.2 4.7 1.2 5.51 0 9.96-4.45 9.96-9.96s-4.45-9.96-9.96-9.96z" />
  </SvgIcon>
);

const EventPage = () => {
  const [copied, setCopied] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Message will disappear after 2 seconds
  };

  const handleVideoEnded = () => {
    // Move to the next item after the video ends
    carouselRef.current.next();
  };

  const currentUrl = window.location.href;

  return (
    <div
      className="gradient-background"
      style={{
        background:
          "linear-gradient(135deg, #ff7e5f, #feb47b, #86A8E7, #91EAE4)", // Improved gradient colors
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 0px 24px 0px",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          borderRadius: "8px",
          boxShadow: 3,
          background:
            "linear-gradient(45deg, #ff7e5f, #feb47b, #86A8E7, #91EAE4)",
        }}
      >
        <Card>
          <Carousel
            ref={carouselRef}
            autoPlay={false}
            index={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
          >
            {galleryItems.slice(0, 3).map((item, index) => (
              <Box key={index} sx={{ height: "400px" }}>
                {item.type === "image" ? (
                  <CardMedia
                    component="img"
                    height="100%"
                    image={item.src}
                    alt={`Event media ${index + 1}`}
                  />
                ) : (
                  <CardMedia
                    component="video"
                    controls
                    height="100%"
                    src={item.src}
                    alt={`Event media ${index + 1}`}
                    onEnded={handleVideoEnded}
                  />
                )}
              </Box>
            ))}
          </Carousel>
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              BCC VBS 2024 - Theme: Keepers Of The Kingdom
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <FacebookShareButton url={currentUrl}>
                <FacebookIcon style={{ width: 32, height: 32 }} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={currentUrl}
                style={{ marginLeft: "10px" }}
              >
                <WhatsappIcon style={{ width: 32, height: 32 }} />
              </WhatsappShareButton>
              <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
                <Tooltip title="Link copied!" open={copied} arrow>
                  <LinkIcon
                    style={{
                      width: 32,
                      height: 32,
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </CopyToClipboard>
            </Box>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              June 19 - 22, 2024
            </Typography>
            <Typography variant="body1" paragraph>
              We are engaged in an epic battle for the hearts and minds of our youth. Every day, they're bombarded with lies about who they are, who their Creator is, and where their salvation comes from. Thankfully, God has given his children armor to wear in this battle between truth and lies, light and darkness, good and evil

              With this VBS, your kids will learn how they can be part of God's kingdom through salvation in his Son and will be equipped with the armor of God to become Keepers of the Kingdom who stand strong in today's battle for truth.
            </Typography>
            <Typography variant="body1" paragraph>
              Join us from June 19-22 for an exciting and enriching experience at BCC! Our program includes stories, singing, dancing, and games, all designed to bring joy and learning. Enjoy half-day sessions where we’ll delve deeper into the teachings of Jesus. Don't miss out on this wonderful opportunity.
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              style={{ fontWeight: "bold", marginTop: "2rem" }}
            >
              Preparations
            </Typography>
            {/* Video under preparations */}
            <Box sx={{ height: "400px", mb: 2 }}>
              <CardMedia
                component="video"
                controls
                height="100%"
                src={galleryItems[3].src}
                alt="Preparations video"
              />
            </Box>
            <Typography variant="body1" paragraph>
              <br></br>
              <br></br>
              <br></br>{<Contact/>} 
            </Typography>
            {/* <Grid container spacing={2}>
              {galleryItems.slice(3).map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.src}
                    alt={`Gallery item ${index + 1}`}
                  />
                </Grid>
              ))}
            </Grid> */}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EventPage;
