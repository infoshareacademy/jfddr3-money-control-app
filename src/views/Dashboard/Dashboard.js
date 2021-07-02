import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Container, Button , Avatar } from '@material-ui/core';

import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

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
    background-color: #156a77;
  }
`;

const StyledLogout = styled(Button)`
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

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function Dashboard() {
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
    <StyledContainer>
      <StyledBox>
        <div>
          <StyledPageTitle>
            <StyledAvatar>
              <LockOpenOutlinedIcon />
            </StyledAvatar>
            <h3>Money Control</h3>
          </StyledPageTitle>
          <h3>welcome: {currentUser.email}</h3>
        </div>
        <StyledLogout
          variant="contained"
          color="primary"
          onClick={handleSignOut}
        >
          logout
        </StyledLogout>
      </StyledBox>
      <h3>
        {' '}
        <a href="#">&laquo;</a> Month <a href="#">&raquo;</a>
      </h3>
      <h3> no current records</h3>
      <StyledButtons>
        <Button variant="contained" color="primary" disableElevation>
          new expense
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          new income
        </Button>
      </StyledButtons>
    </StyledContainer>
  );
}

export default Dashboard;
