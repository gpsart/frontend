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
import FileUpload from "./FileUpload";

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
    <Container className={classes.cardGrid} maxWidth="md">
      <FileUpload/>
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
                  {/*<Button size="small" color="primary">*/}
                  {/*  View*/}
                  {/*</Button>*/}
                  {/*<Button size="small" color="primary">*/}
                  {/*  Edit*/}
                  {/*</Button>*/}
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ActivityRoutesGrid;
