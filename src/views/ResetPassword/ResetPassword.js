import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { useAuth } from '../../contexts/AuthContext';

const StyledButton = styled(Button)`
  margin: 10px;
  background-color: #156a77;
  :hover {
    background-color: #13c1b6;
  }
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

const Alert = styled.p`
  color: red;
`;

const ResetPassword = () => {
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signIn(e.target.email.value, e.target.password.value);
      history.push('/');
    } catch {
      setError('Failed to sign in');
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
          <Typography variant="h4">Reset Password </Typography>
        </Grid>
        {error && <Alert>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <StyledTextField
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            helperText=""
            required
          />

          <Grid>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Reset Password
            </StyledButton>
            <Typography>
              <Link to="/">login</Link>
            </Typography>
          </Grid>
        </form>
      </StyledPaper>
      Need an account? <Link to="/signup">Sing up</Link>
    </Grid>
  );
};

export default ResetPassword;
