import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton, Typography } from '@material-ui/core';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { months } from '../data/months';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  background-color: #156a77;
  color: white;
  &:hover {
    background-color: gray;
  }
`;

const StyledTypography = styled(Typography)`
  color: #156a77;
  font-size: 18px;
`;

export const MonthSwitch = () => {
  const [currentMonth, setCurrentMonth] = useState(1);

  function goToNextMonth() {
    setCurrentMonth(month => month + 1);
  }

  function goToPreviousMonth() {
    setCurrentMonth(month => month - 1);
  }

  return (
    <ButtonsContainer>
      <StyledIconButton
        onClick={goToPreviousMonth}
        disabled={currentMonth === 0 && true}
        size="small"
      >
        <KeyboardArrowLeftOutlinedIcon fontSize="default" />
      </StyledIconButton>
      <StyledTypography>{months[currentMonth].name}</StyledTypography>
      <StyledIconButton
        onClick={goToNextMonth}
        disabled={currentMonth === 11 && true}
        size="small"
      >
        <KeyboardArrowRightOutlinedIcon fontSize="default" />
      </StyledIconButton>
    </ButtonsContainer>
  );
};
