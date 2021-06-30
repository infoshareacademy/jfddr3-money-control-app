import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { EntriesList } from '../../components/EntriesList';
import { firestore } from '../../config/firebase';

function MockDashboard() {
  const [error, setError] = useState('');
  const { currentUser, signOut } = useAuth();
  const history = useHistory();
  const [entries, setEntries] = useState([]);

  async function handleSignOut() {
    setError('');

    try {
      await signOut();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  useEffect(() => {
    // getting data from mock collection 'todos' for testing
    const unsubscribe = firestore
      .collection('todos')
      .where('userId', '==', currentUser.uid)
      .onSnapshot(snapshot => {
        const entriesData = [];
        snapshot.forEach(doc =>
          entriesData.push({
            ...doc.data(),
            id: doc.id
          })
        );
        setEntries(entriesData);
      });
    return unsubscribe;
  }, [currentUser.uid]);

  return (
    <Container>
      {error && <p>{error}</p>}
      <Typography>MockDashboard</Typography>
      <Typography>Welcome: {currentUser.email}</Typography>
      <Button variant="contained" color="primary" onClick={handleSignOut}>
        wyloguj
      </Button>
      <EntriesList entries={entries} />
    </Container>
  );
}

export default MockDashboard;
