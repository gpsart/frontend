import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import ActivityRoutesGrid from './components/ActivityRoutesGrid'
import ActivityRoute from './components/ActivityRoute'
import HowItWorks from './components/HowItWorks'
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './logogps.png';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

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
  logo: {
    maxWidth: "80px",
    marginRight: "35px"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography variant="h6" color="inherit" noWrap>
              Gps art project
            </Typography>
            <Link className={classes.link} to={`/how-it-works`} >
              <IconButton color="secondary" aria-label="how-it-works">
                <HelpOutlineIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <main>
          <Switch>
            <Route path="/" component={ActivityRoutesGrid} exact/>
            <Route path="/how-it-works" component={HowItWorks} exact/>
            <Route path="/activity-routes/:id" component={ActivityRoute}/>
            <Route path="/api/v2/routes/:id/content" onEnter={() => window.location.reload()} />
          </Switch>
        </main>
      </React.Fragment>
    </div>
  )
}

export default App;
