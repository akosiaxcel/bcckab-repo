import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Tooltip,
  SvgIcon,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { Link as LinkIcon } from "@mui/icons-material";
import eventImage1 from "../assets/img/kainos-seminar.jpg";
import Contact from "./Contact";

// Add your media items (images or videos) here
const galleryItems = [
  { type: "image", src: eventImage1 },
  { type: "video", src: "../src/assets/vid/event-promo.mp4" },
  { type: "image", src: eventImage1 },
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

const Kainos = () => {
  const [copied, setCopied] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVideoEnded = () => {
    carouselRef.current.next();
  };

  const currentUrl = window.location.href;

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #ff7e5f, #feb47b, #86A8E7, #91EAE4)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <Container maxWidth="md" sx={{ borderRadius: 8, boxShadow: 3 }}>
        <Card sx={{marginTop:10}} >
          <Carousel
            ref={carouselRef}
            autoPlay={false}
            index={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
            
          >
            {galleryItems.map((item, index) => (
              <Box key={index} sx={{ height: 400 }}>
                {item.type === "image" ? (
                  <CardMedia component="img" height="100%" image={item.src} alt={`Gallery media ${index + 1}`} />
                ) : (
                  <CardMedia component="video" controls height="100%" src={item.src} onEnded={handleVideoEnded} />
                )}
              </Box>
            ))}
          </Carousel>
          <CardContent>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Kainos Discipleship Seminar
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <FacebookShareButton url={currentUrl}>
                <FacebookIcon style={{ width: 32, height: 32 }} />
              </FacebookShareButton>
              <WhatsappShareButton url={currentUrl} style={{ marginLeft: 10 }}>
                <WhatsappIcon style={{ width: 32, height: 32 }} />
              </WhatsappShareButton>
              <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
                <Tooltip title="Link copied!" open={copied} arrow>
                  <LinkIcon style={{ width: 32, height: 32, marginLeft: 10, cursor: "pointer" }} />
                </Tooltip>
              </CopyToClipboard>
            </Box>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              March 10, 2024 9am-3pm
            </Typography>
            <Typography variant="body1" paragraph>
              Join us at Hans Guest House Function Hall. This seminar is designed to empower and equip leaders for impactful ministry.
              Due to limited seating, we encourage you to register early to secure your spot.
<br></br>
Registration requires Gcash payment.<br></br>
See link below ⬇️
<br></br>
<br></br>
Register here:<br></br>
COPY THE LINK and PASTE ON YOUR BROWSER<br></br>
<br></br>
<6https://docs.google.com/.../1FAIpQLSdQTVnnNW.../viewform<br></br>

We look forward to your participation!
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Kainos;