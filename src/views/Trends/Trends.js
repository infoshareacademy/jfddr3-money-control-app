import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Paper, Avatar, Button, Typography } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const StyledButton = styled(Button)`
  margin: 10px;
  background-color: #156a77;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #156a77;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  height: 50vh;
  width: 280px;
  margin: 20px auto;
`;

const Trends = () => {
  return (
    <Grid align="center">
      <StyledPaper elevation={10}>
        <Grid align="center">
          <StyledAvatar>
            <LockOpenOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h4">Monthly Trends</Typography>
        </Grid>
        <p>Chart...</p>
        <Grid>
          <StyledButton
            component={Link}
            variant="contained"
            color="primary"
            to="/"
          >
            back
          </StyledButton>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default Trends;
