import React, {useState, useEffect} from "react";
import ActivityRoutesDataService from "../services/ActivityRoutesDataService";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import RouteUpload from "./RouteUpload";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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


const ActivityRoutesGrid = () => {
  const classes = useStyles();
  const [activityRoutes, setActivityRoutes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const activityRoutes = await ActivityRoutesDataService.getAll();

      setActivityRoutes(activityRoutes.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <RouteUpload/>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">

        <Grid container spacing={4}>
          {activityRoutes.map((activityRoute) => (
            <Grid item key={activityRoute.id} xs={12} sm={6} md={4}>
              <Link className={classes.link} to={`/activity-routes/${activityRoute.id}`} >
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
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ActivityRoutesGrid;
