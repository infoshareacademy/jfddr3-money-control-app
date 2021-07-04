import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../config/firebase';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  background-color: #156a77;
  margin-top: 25px;
  :hover {
    background-color: #13c1b6;
  }
`;
const StyledButtonCancel = styled(Button)`
  font-size: 12px;
  color: white;
  margin: 10px;
  background-color: red;
  :hover{
    background-color: #13C1B6;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #156a77;
`;

const StyledTextField = styled(TextField)`
  margin: 1rem;
  width: '25ch';
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  height: 50vh;
  width: 280px;
  margin: 20px auto;
`;

const AddEntry = () => {
  const { currentUser } = useAuth();
  const dataLink = useLocation();
  const history = useHistory();
  const [category, setCategory] = useState(
    dataLink.state.operation === 'Add' ? '0' : dataLink.state.entry.category
  );
  const [note, setNote] = useState(
    dataLink.state.operation === 'Add' ? '' : dataLink.state.entry.note
  );
  const [amount, setAmount] = useState(
    dataLink.state.operation === 'Add' ? '' : dataLink.state.entry.amount
  );
  const [date, setDate] = useState(
    dataLink.state.operation === 'Add' ? '' : dataLink.state.entry.date
  );

  const handleCreate = e => {
    e.preventDefault();
    database.entries.add({
      userId: currentUser.uid,
      createdAt: database.getCurrentTimestamp(),
      type: dataLink.state.type,
      date: e.target.date.value,
      amount: e.target.amount.value,
      note: e.target.note.value,
      category: e.target.category.value
    });
    history.push('/');
  };

  const handleUpdate = e => {
    e.preventDefault();
    database.entries.doc(dataLink.state.entry.id).set({
      ...dataLink.state.entry,
      category,
      note,
      amount,
      date
    });
    history.push('/');
  };

  return (
    <Grid align="center">
      <StyledPaper elevation={10}>
        <Typography variant="h5">
          {dataLink.state.operation} {dataLink.state.type}
        </Typography>
        <Form
          onSubmit={
            dataLink.state.operation === 'Add' ? handleCreate : handleUpdate
          }
        >
          <StyledTextField
            type="date"
            name="date"
            variant="outlined"
            helperText=""
            required
            value={date}
            onChange={e => {
              setDate(e.target.value);
            }}
          />

          <StyledTextField
            type="number"
            name="amount"
            label="Amount"
            variant="outlined"
            helperText="Only numbers"
            required
            min="0"
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
          />

          <StyledTextField
            type="text"
            name="note"
            label="Note"
            variant="outlined"
            helperText=""
            required
            value={note}
            onChange={e => {
              setNote(e.target.value);
            }}
          />

          <Select
            value={category}
            onChange={e => {
              setCategory(e.target.value);
            }}
            name="category"
            required
          >
            <MenuItem value="0" disabled>
              --Category--
            </MenuItem>
            {dataLink.state.options.map((option, key) => (
              <MenuItem key={key} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Submit
          </StyledButton>
        </Form>
        <StyledButtonCancel
          type="submit"
          variant="contained"
          color="red"
          component={Link}
          to="/"
          endIcon={<DeleteIcon />}
        >
          Cancel
        </StyledButtonCancel>
      </StyledPaper>
    </Grid>
  );
};

export default AddEntry;
