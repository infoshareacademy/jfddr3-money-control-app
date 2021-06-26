import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
// import { useHistory } from 'react-router-dom';

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

const SignUp = () => {
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const history = useHistory()

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(e.target.email.value);
  //   console.log(e.target.password.value);
  //   console.log(e.target.passwordConfirm.value);
  // };

  async function handleSubmit(e) {
    e.preventDefault();

    if (e.target.password.value !== e.target.passwordConfirm.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(e.target.email.value, e.target.password.value);
      // history.push('/')
    } catch {
      setError('Failed to create an account');
      setLoading(false);
    }
  }

  return (
    <Grid align="center">
      <StyledPaper elevation={10}>
        <Grid align="center">
          <StyledAvatar>
            <LockOpenOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h4">Sign Up</Typography>
        </Grid>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <StyledTextField
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            helperText=""
            type="email"
            required
          />
          <StyledTextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            required
          />
          <StyledTextField
            id="password-confirm"
            name="passwordConfirm"
            label="Password Confirmation"
            variant="outlined"
            type="password"
            required
          />
          <Grid>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              onSubmit={handleSubmit}
              disabled={loading}
            >
              Sign Up
            </StyledButton>
            <Typography>
              Already have an account?
              <Link> Log In</Link>
            </Typography>
          </Grid>
        </form>
      </StyledPaper>
    </Grid>
  );
};

export default SignUp;
