import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../config/firebase';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
    <section>
      <h3>
        {dataLink.state.operation} {dataLink.state.type}
      </h3>
      <Form
        onSubmit={
          dataLink.state.operation === 'Add' ? handleCreate : handleUpdate
        }
      >
        <input
          type="date"
          name="date"
          required
          value={date}
          onChange={e => {
            setDate(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          required
          min="0"
          value={amount}
          onChange={e => {
            setAmount(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Note"
          name="note"
          maxLength="20"
          value={note}
          onChange={e => {
            setNote(e.target.value);
          }}
        />
        <select
          value={category}
          onChange={e => {
            setCategory(e.target.value);
          }}
          name="category"
          required
        >
          <option value="0" disabled>
            --Category--
          </option>
          {dataLink.state.options.map((option, key) => (
            <option key={key} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </Form>
      <Link to="/">Cancel</Link>
    </section>
  );
};

export default AddEntry;
