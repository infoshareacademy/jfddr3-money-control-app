import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { EntriesList } from '../../components/EntriesList';
import { database } from '../../config/firebase';

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
    const unsubscribe = database.entries
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
      <div>
        <Link
          to={{
            pathname: '/add-entry',
            state: {
              operation: 'Add',
              type: 'income',
              options: ['Work', 'Gifts', 'Other']
            }
          }}
        >
          Add Income
        </Link>
      </div>
      <Link
        to={{
          pathname: '/add-entry',
          state: {
            operation: 'Add',
            type: 'expense',
            options: [
              'Food',
              'Transport',
              'Accomodation',
              'Entertainment',
              'Other'
            ]
          }
        }}
      >
        Add Expense
      </Link>
    </Container>
  );
}

export default MockDashboard;
