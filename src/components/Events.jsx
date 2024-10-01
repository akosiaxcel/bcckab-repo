import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import eventImage1 from "../assets/img/2.png"; // Import the image
import eventImage2 from "../assets/img/kainos-seminar.jpg"; // Import the image


// Moved Kainos Discipleship Seminar to upcoming events
const upcomingEvents = [
  {
    id: "kainos-seminar",
    title: "Kainos Discipleship Seminar",
    date: "October 10",
    description:
      "We are pleased to invite Pastors and Church Leaders to T.O.P.I.C / Navigators - Kainos Discipleship Seminar",
    details:
      "October 10, 2024, from 9:00 AM to 3:00 PM at Hans Guest House Function Hall. This seminar is designed to empower and equip leaders for impactful ministry.",
    image: eventImage2,
    gradientColors: ["#a8c0ff", "#d9e4ff", "#b3d1ff", "#e6f0ff"], // Lighter blue gradient colors
  },
];

const events2024 = [
  {
    id: "BCCVBS2024",
    title: "BCC VBS 2024 - Theme: Keepers Of The Kingdom",
    date: "June 19 - 22",
    description:
      "We are engaged in an epic battle for the hearts and minds of our youth. Thankfully, God has given his children armor to wear in this battle between good and evil.",
    details:
      "Detailed information about Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.",
    image: eventImage1,
    gradientColors: ["#a8c0ff", "#d9e4ff", "#b3d1ff", "#e6f0ff"], // Lighter blue gradient colors
  },
];

const Events = () => {
  return (
    <Container>
      {/* Upcoming Events Section */}
      <Typography
        variant="h3"
        gutterBottom
        style={{
          color: "white",
          margin: "1rem 0 2rem 0",
          fontWeight: "bold",
          paddingTop: "74px",
        }}
      >
        Upcoming Events
      </Typography>

      {upcomingEvents.length > 0 ? (
        upcomingEvents.map((event, index) => (
          <Card
            key={index}
            sx={{
              marginBottom: "1rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 20px .2px #e6f0ff",
              position: "relative",
              overflow: "hidden",
              color: "white",
            }}
            id={event.id}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.9,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${event.gradientColors[0]}, ${event.gradientColors[1]}, ${event.gradientColors[3]}, ${event.gradientColors[4]})`,
                opacity: 0.3,
                zIndex: 2,
              }}
            />
            <CardContent
              sx={{
                position: "relative",
                zIndex: 3,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <RouterLink
                      to={`/events/${event.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {event.title}
                    </RouterLink>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {event.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={`/events/${event.id}`}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="textSecondary" align="center">
          No Upcoming Events
        </Typography>
      )}

      {/* 2024 Events Section */}
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "white", margin: "1rem 0 2rem 0", fontWeight: "bold" }}
      ><br>
      </br>
      <br>
      </br>
        2024 Events
      </Typography>

      {events2024.length > 0 ? (
        events2024.map((event, index) => (
          <Card
            key={index}
            sx={{
              marginBottom: "1rem",
              borderRadius: "8px",
              boxShadow: "0px 0px 20px .2px #e6f0ff",
              position: "relative",
              overflow: "hidden",
              color: "white",
            }}
            id={event.id}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.9,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${event.gradientColors[0]}, ${event.gradientColors[1]}, ${event.gradientColors[3]}, ${event.gradientColors[4]})`,
                opacity: 0.3,
                zIndex: 2,
              }}
            />
            <CardContent
              sx={{
                position: "relative",
                zIndex: 3,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <RouterLink
                      to={`/events/${event.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {event.title}
                    </RouterLink>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    paragraph
                    sx={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {event.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to={`/events/${event.id}`}
                  >
                    View Details
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="textSecondary" align="center">
          No Events for 2024
        </Typography>
      )}
    </Container>
  );
};

export default Events;