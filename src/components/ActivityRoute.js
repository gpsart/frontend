import React, {useEffect, useState} from 'react';
import ActivityRoutesDataService from "../services/ActivityRoutesDataService";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useParams} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import ActivityUpload from "./ActivityUpload";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

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

const columns = [
  {field: 'name', headerName: 'Name', width: 200},
  {field: 'result', headerName: 'Result', width: 200},
];

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
            Distance: {activityRoute.distance}
          </Typography>
          <List>
            {activityRoute && activityRoute.leaderboard && activityRoute.leaderboard.map((leaderboard) => (
              <ListItem button>
                <ListItemIcon>
                  <Avatar>
                    <ImageIcon/>
                  </Avatar>
                </ListItemIcon>
                <ListItemText primary={leaderboard.name} secondary={leaderboard.result}/>
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <ActivityUpload id={id}/>
          <Link className={classes.link} target="_blank" to={`/api/v2/routes/${activityRoute.id}/content`} >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CloudDownloadIcon />}
            >
              Download Route
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ActivityRoute;
