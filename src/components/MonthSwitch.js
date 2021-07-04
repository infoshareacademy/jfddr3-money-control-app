import React from 'react';
import styled from 'styled-components';
import { IconButton, Typography } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

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
  return (
    <ButtonsContainer>
      <StyledIconButton>
        <ArrowBackIosOutlinedIcon />
      </StyledIconButton>
      <StyledTypography>MonthName</StyledTypography>
      <StyledIconButton>
        <ArrowForwardIosOutlinedIcon />
      </StyledIconButton>
    </ButtonsContainer>
  );
};
