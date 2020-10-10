import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ActivityRoutesGrid from './components/ActivityRoutesGrid'
import ActivityRoute from './components/ActivityRoute'
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    //padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    //marginTop: theme.spacing(4),
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
  footer: {
    //backgroundColor: theme.palette.background.paper,
    //padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Share your art
            </Typography>
          </Toolbar>
        </AppBar>
        {/*<AppBar position="relative">*/}
        {/*  <Toolbar>*/}
        {/*    <CameraIcon className={classes.icon}/>*/}
        {/*    <Typography variant="h6" color="inherit" noWrap>*/}
        {/*      Album layout*/}
        {/*    </Typography>*/}
        {/*  </Toolbar>*/}
        {/*</AppBar>*/}
        <main>
          {/* Hero unit */}
          {/*<div className={classes.heroContent}>*/}
          {/*  <Container maxWidth="sm">*/}
          {/*    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>*/}
          {/*      Share your art*/}
          {/*    </Typography>*/}
          {/*    <Typography variant="h5" align="center" color="textSecondary" paragraph>*/}
          {/*      by SteelCannons*/}
          {/*    </Typography>*/}
          {/*    <div className={classes.heroButtons}>*/}
          {/*      <Grid container spacing={2} justify="center">*/}
          {/*        <Grid item>*/}
          {/*          <Button variant="contained" color="primary">*/}
          {/*            Main call to action*/}
          {/*          </Button>*/}
          {/*        </Grid>*/}
          {/*        <Grid item>*/}
          {/*          <Button variant="outlined" color="primary">*/}
          {/*            Secondary action*/}
          {/*          </Button>*/}
          {/*        </Grid>*/}
          {/*      </Grid>*/}
          {/*    </div>*/}
          {/*  </Container>*/}
          {/*</div>*/}
          <Switch>
            <Route path="/" component={ActivityRoutesGrid} exact/>
            <Route path="/activity-routes/:id" component={ActivityRoute}/>
          </Switch>
        </main>
      </React.Fragment>
    </div>
  )
}

export default App;
