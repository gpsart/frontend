import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import choose_from_list from "../choose-route.jpg";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
}));

const HowItWorks = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
        To run route - choose from the list and press Download Route
      </Typography>
      <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
        Upload it to strava or mapmyrun
      </Typography>
      <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
        To add new route go to list page and upload new route in .gpx format
      </Typography>
    </Container>
  );
};

export default HowItWorks;
