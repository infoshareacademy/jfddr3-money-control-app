import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function MockDashboard() {
  const [error, setError] = useState('');
  const { currentUser, signOut } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    setError('');

    try {
      await signOut();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <Container>
      {error && <p>{error}</p>}
      <Typography>MockDashboard</Typography>
      <Typography>Welcome: {currentUser.email}</Typography>
      <Button variant="contained" color="primary" onClick={handleSignOut}>
        wyloguj
      </Button>
    </Container>
  );
}

export default MockDashboard;
