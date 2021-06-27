import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { borders } from '@material-ui/system';
import  styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
 

const StyledContainer = styled(Container)`
  border: 1px solid #000;
  width: 400px;
  text-align: center;
`;

const StyledLogout = styled(Button)`
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  h3 {
    margin: 0;
    padding: 0px 0;
    text-align: left;
  }
`;

function Dashboard() {
  const classes = useStyles();


  return (
    <StyledContainer className={classes.root}>
      <StyledBox>
        <div>
          <h3>Money Control</h3>
          <h3>welcome, Username</h3>
        </div>
        <StyledLogout variant="contained" color="primary" disableElevation>logout</StyledLogout>
      
      </StyledBox>
      <h3>&laquo; &laquo; Month &raquo; &raquo;</h3>
      <h3> no current records</h3>
      <Button variant="contained" color="primary" disableElevation>
     new expense
    </Button>
    <Button variant="contained" color="primary" disableElevation>
     new income
    </Button>
    </StyledContainer>
 
 );
}



export default Dashboard;
