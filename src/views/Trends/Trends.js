import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { TrendsChart } from '../../components/TrendsChart';

const StyledButton = styled(Button)`
  margin: 10px;
  background-color: #156a77;
`;

const StyledTypography = styled(Typography)`
  color: #156a77;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  height: 50vh;
  width: 50%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const Trends = () => {
  const mockData = [
    {
      month: 'January',
      expenses: 4000,
      incomes: 2400,
      amt: 2400
    },
    {
      month: 'February',
      expenses: 3000,
      incomes: 1398,
      amt: 2210
    },
    {
      month: 'March',
      expenses: 2000,
      incomes: 9800,
      amt: 2290
    },
    {
      month: 'April',
      expenses: 2780,
      incomes: 3908,
      amt: 2000
    },
    {
      month: 'May',
      expenses: 1890,
      incomes: 4800,
      amt: 2181
    },
    {
      month: 'June',
      expenses: 2390,
      incomes: 3800,
      amt: 2500
    },
    {
      month: 'July',
      expenses: 3490,
      incomes: 4300,
      amt: 2100
    }
  ];

  return (
    <Grid align="center">
      <StyledPaper elevation={10}>
        <Grid align="center">
          <StyledTypography variant="h4">Monthly Trends</StyledTypography>
        </Grid>
        <TrendsChart data={mockData} />
        <Grid>
          <StyledButton
            component={Link}
            variant="contained"
            color="primary"
            to="/"
          >
            back
          </StyledButton>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default Trends;
