import React from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const SignIn = () => {
  return (
    <>
      <Container>
        <Typography variant="h2">Sign In</Typography>
        <form>
          <div>
            <TextField type="email" label="E-mail" required />
            <TextField type="password" label="Password" required />
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </Container>
      <div>Need an account? Sign Up</div>
    </>
  );
};

export default SignIn;
