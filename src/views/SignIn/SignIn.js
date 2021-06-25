import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link
} from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
const StyledButton = styled(Button)`
  margin: 10px;
  background-color: #156a77;
`;
const StyledAvatar = styled(Avatar)`
  background-color: #156a77;
`;
const StyledTextField = styled(TextField)`
  margin: 1rem;
  width: '25ch';
`;
const StyledPaper = styled(Paper)`
  padding: 20px;
  height: 50vh;
  width: 280px;
  margin: 20px auto;
`;
const SignIn = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <Grid align="center">
      <StyledPaper elevation={10}>
        <Grid align="center">
          <StyledAvatar>
            <LockOpenOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h4">Sign In</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            id="Outlined"
            name="email"
            label="E-mail"
            variant="outlined"
            helperText=""
            required
          />
          <StyledTextField
            id="Outlined"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            required
          />
          <Grid>
            <StyledButton type="submit" variant="contained" color="primary">
              Sign In
            </StyledButton>
            <Typography>
              Forgot password?
              <Link href="#"> Click here!</Link>
            </Typography>
          </Grid>
        </form>
      </StyledPaper>
    </Grid>
  );
};
export default SignIn;