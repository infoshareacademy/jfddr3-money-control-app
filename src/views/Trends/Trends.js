import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const dataLink = useLocation();
  const entries = dataLink.state.entries;

  const months = [
    {
      monthLabel: 'January',
      monthNumber: '01'
    }
  ];

  const getMonthlyEntries = (monthName, entries) => {
    const userData = entries.map(entry => {
      return {
        ...entry,
        dateArr: entry.date.split('-')
      };
    });
    return userData.filter(entry => entry.dateArr[1] === monthName);
  };

  // data for july
  const julyEntries = getMonthlyEntries('07', entries);
  console.log(julyEntries);

  // expenses for july
  const julyExpensesList = julyEntries.filter(
    entry => entry.type === 'expense'
  );
  console.log(julyExpensesList);

  const julyExpensesArr = julyExpensesList.map(entry => entry.amount);
  console.log(julyExpensesArr);

  const julyExpenses = julyExpensesArr.reduce(
    (a, c) => parseInt(a) + parseInt(c),
    0
  );
  console.log(julyExpenses);

  // incomes for july
  const julyIncomesList = julyEntries.filter(entry => entry.type === 'income');
  console.log(julyIncomesList);

  const julyIncomesArr = julyIncomesList.map(entry => entry.amount);
  console.log(julyIncomesArr);

  const julyIncomes = julyIncomesArr.reduce(
    (a, c) => parseInt(a) + parseInt(c),
    0
  );
  console.log(julyIncomes);

  const julyData = {
    month: 'July',
    expenses: julyExpenses,
    incomes: julyIncomes
  };
  console.log(julyData);

  const mockData = [
    {
      month: 'January',
      expenses: 400,
      incomes: 2400
    },
    {
      month: 'February',
      expenses: 3000,
      incomes: 1398
    },
    {
      month: 'March',
      expenses: 200,
      incomes: 980
    },
    {
      month: 'April',
      expenses: 278,
      incomes: 390
    },
    {
      month: 'May',
      expenses: 189,
      incomes: 480
    },
    {
      month: 'June',
      expenses: 239,
      incomes: 380
    },
    {
      month: 'July',
      expenses: julyExpenses,
      incomes: julyIncomes
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
