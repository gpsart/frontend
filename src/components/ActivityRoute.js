import React, {useEffect, useState} from 'react';
import ActivityRoutesDataService from "../services/ActivityRoutesDataService";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FileUpload from "./FileUpload";
import { DataGrid } from '@material-ui/data-grid';

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
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'result', headerName: 'Result', width: 200 },
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
          {/*<Typography>*/}
          {/*  Rate: {activityRoute.rate}*/}
          {/*</Typography>*/}
          <Divider />
          <Typography variant="h5" component="h2">
            Leaderboards:
          </Typography>

          {activityRoute && activityRoute.leaderboard && (
            <div style={{ height: 400, width: '100%' }}>
             <DataGrid rows={activityRoute.leaderboard} columns={columns} />
            </div>
          )}


          {/*<List component="nav" aria-label="main mailbox folders">*/}



            {/*{activityRoute && activityRoute.leaderboard && activityRoute.leaderboard.map(item => (*/}
            {/*  <ListItem button>*/}
            {/*    <ListItemText primary={item.name}/>*/}
            {/*    <ListItemText primary={item.result}/>*/}
            {/*  </ListItem>*/}
            {/*))}*/}


            {/*{activityRoute && activityRoute.leaderboard.map((item) => (*/}

            {/*))}*/}
          {/*</List>*/}
        </CardContent>
        <CardActions>
          <FileUpload/>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ActivityRoute;
