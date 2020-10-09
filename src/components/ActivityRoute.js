import React, {useEffect, useState} from 'react';
import ActivityRoutesDataService from "../services/activity-routes.data.service";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

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

const ActivityRoute = () => {
  let {id} = useParams();
  const classes = useStyles();
  const [activityRoute, setActivityRoute] = useState({});

  useEffect(() => {
    async function fetchData() {
      const activityRoute = await ActivityRoutesDataService.get(id);

      setActivityRoute(activityRoute.data);
    }

    fetchData();
  }, [id]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={activityRoute.image}
          title={activityRoute.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {activityRoute.name}
          </Typography>
          <Typography>
            Distance:  {activityRoute.distance}
          </Typography>
          <Typography>
            Rate:  {activityRoute.rate}
          </Typography>
        </CardContent>
        <CardActions>
          {/*<Button size="small" color="primary">*/}
          {/*  View*/}
          {/*</Button>*/}
          {/*<Button size="small" color="primary">*/}
          {/*  Edit*/}
          {/*</Button>*/}
        </CardActions>
      </Card>
    </Container>
  );
};

export default ActivityRoute;
