import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../config/firebase';
import { Link, useLocation } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const MockAddEntry = () => {
  const [option, setOption] = useState('0');
  const { currentUser } = useAuth();
  const dataLink = useLocation();

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
  };

  return (
    <section>
      <h3>Add {dataLink.state.type}</h3>
      <Form onSubmit={handleCreate}>
        <input type="date" name="date" required />
        <input type="text" placeholder="Amount" name="amount" required />
        <input type="text" placeholder="Note" name="note" required />
        <select
          value={option}
          onChange={e => {
            setOption(e.target.value);
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
