import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography>Dashboard</Typography>
      <Button variant="contained" color="primary" disableElevation justify="flex-end">
     wyloguj
    </Button>
      <h3>welcome: Jan Nowak</h3>
      <Button variant="contained" color="primary" disableElevation>
     new expense
    </Button>
    <Button variant="contained" color="primary" disableElevation>
     new income
    </Button>
    </Container>
 
 );
}



export default Dashboard;
