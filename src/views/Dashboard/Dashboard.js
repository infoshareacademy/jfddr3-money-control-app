import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { Container, Button, Avatar } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { database } from '../../config/firebase';
import { EntriesList } from '../../components/EntriesList';
import ScrollTop from '../../components/ScrollTop';
import { MonthSwitch } from '../../components/MonthSwitch';
import PieChartExpenses from '../../components/PieChart';

const StyledAvatar = styled(Avatar)`
  background-color: #156a77;
  margin-right: 10px;
`;

const StyledPageTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  border: 1px solid #000;
  width: 50% !important;
  text-align: center;
  & > * {
    margin: 2px;
  }
  button {
    margin: 16px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #156a77;
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

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MockAlert = styled.p`
  color: red;
`;

function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, signOut } = useAuth();
  const history = useHistory();
  const [entries, setEntries] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const getMonthlyEntries = monthNumber => {
    const userData = entries.map(entry => {
      return {
        ...entry,
        dateArr: entry.date.split('-')
      };
    });
    return userData.filter(entry => parseInt(entry.dateArr[1]) === monthNumber);
  };

  const entriesToDisplay = getMonthlyEntries(currentMonth).filter(entry => {
    if (activeFilter === 'all') {
      return true;
    }
    if (activeFilter === 'incomes') {
      return entry.type === 'income';
    }
    if (activeFilter === 'expenses') {
      return entry.type === 'expense';
    }
    return false;
  });

  function goToNextMonth() {
    setCurrentMonth(sequence => sequence + 1);
  }

  function goToPreviousMonth() {
    setCurrentMonth(sequence => sequence - 1);
  }

  return (
    <StyledContainer>
      <StyledBox id="back-to-top-anchor">
        <StyledPageTitle>
          <StyledAvatar style={{ backgroundColor: '#156a77', color: 'white' }}>
            <LockOpenOutlinedIcon />
          </StyledAvatar>
          <h3 style={{ color: '#156a77' }}>Money Control</h3>
        </StyledPageTitle>
        <div style={{ display: 'flex' }}>
          <StyledPageTitle>{currentUser.email}</StyledPageTitle>
          <StyledButton
            style={{ backgroundColor: '#156a77', color: 'white' }}
            variant="contained"
            color="inherit"
          >
            profile
          </StyledButton>
          <StyledButton
            style={{ backgroundColor: '#156a77', color: 'white' }}
            variant="contained"
            color="inherit"
            onClick={handleSignOut}
          >
            logout
          </StyledButton>
        </div>
      </StyledBox>
      {error && <MockAlert>{error}</MockAlert>}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PieChartExpenses entries={entriesToDisplay} />
      </div>
      {/* h3 placeholder for future component */}
      <h3>Mock Balance: 0,00 PLN</h3>
      <StyledButtonsContainer>
        <StyledButton
          style={{ backgroundColor: 'green' }}
          variant="contained"
          color="primary"
          disableElevation
          component={Link}
          to={{
            pathname: '/add-entry',
            state: {
              operation: 'Add',
              type: 'income',
              options: ['Work', 'Gifts', 'Other']
            }
          }}
        >
          new income
        </StyledButton>
        <StyledButton
          style={{ backgroundColor: '#156a77', color: 'white' }}
          variant="contained"
          color="primary"
          disableElevation
          component={Link}
          to={{
            pathname: '/trends',
            state: { entries }
          }}
        >
          trends <ShowChartIcon />
        </StyledButton>
        <StyledButton
          style={{ backgroundColor: 'red' }}
          variant="contained"
          color="secondary"
          disableElevation
          component={Link}
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
          new expense
        </StyledButton>
      </StyledButtonsContainer>
      <StyledButtonsContainer>
        <MonthSwitch
          currentMonth={currentMonth}
          handleClickNext={() => {
            goToNextMonth();
          }}
          handleClickPrev={() => {
            goToPreviousMonth();
          }}
        />
        {/* poniższe przyciski będą częścią nowego komponentu w kolejnym tasku */}
        <button onClick={() => setActiveFilter('all')}>All</button>
        <button onClick={() => setActiveFilter('incomes')}>Incomes</button>
        <button onClick={() => setActiveFilter('expenses')}>Expenses</button>
      </StyledButtonsContainer>
      <EntriesList entries={entriesToDisplay} />
      <ScrollTop />
    </StyledContainer>
  );
}

export default Dashboard;
