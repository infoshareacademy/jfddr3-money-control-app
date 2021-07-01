import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../config/firebase';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const MockAddEntry = () => {
  const [select, setSelect] = useState('0');
  const { currentUser } = useAuth();
  const dataLink = useLocation();
  const history = useHistory();

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

  return (
    <section>
      <h3>Add {dataLink.state.type}</h3>
      <Form onSubmit={handleCreate}>
        <input type="date" name="date" required />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          required
          min="0"
        />
        <input type="text" placeholder="Note" name="note" required />
        <select
          value={select}
          onChange={e => {
            setSelect(e.target.value);
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

export default MockAddEntry;
