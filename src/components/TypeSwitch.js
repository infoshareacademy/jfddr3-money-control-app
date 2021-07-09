import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  background-color: #156a77;
  color: white;
`;

export const TypeSwitch = ({ setter }) => {
  const [alignment, setAlignment] = React.useState('all');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div value={alignment} onChange={handleAlignment}>
      <StyledButton
        value="all"
        onClick={() => setter('all')}
        variant="contained"
      >
        All
      </StyledButton>
      <StyledButton
        value="incomes"
        onClick={() => setter('incomes')}
        variant="contained"
      >
        Incomes
      </StyledButton>
      <StyledButton
        value="expenses"
        onClick={() => setter('expenses')}
        variant="contained"
      >
        Expenses
      </StyledButton>
    </div>
  );
};
