import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

function MockDashboard() {
  return (
    <Container>
      <Typography>MockDashboard</Typography>
      <Typography>Welcome: ...</Typography>
      <Button variant="contained" color="primary">
        wyloguj
      </Button>
    </Container>
  );
}

export default MockDashboard;
