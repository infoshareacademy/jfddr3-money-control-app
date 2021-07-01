import React from 'react';
import { database } from '../config/firebase';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Entry = ({ entry }) => {
  const onDelete = () => {
    database.entries.doc(entry.id).delete();
  };

  // console.log(database.entries.doc(entry.id))

  return (
    <li>
      [{entry.type}] [{entry.category}] [{entry.note}] [{entry.date}] [
      {entry.amount}]
      {entry.type === 'income' ? (
        <Link
          to={{
            pathname: '/add-entry',
            state: {
              entry,
              operation: 'Update',
              type: 'income',
              options: ['Work', 'Gifts', 'Other']
            }
          }}
        >
          Update
        </Link>
      ) : (
        <Link
          to={{
            pathname: '/add-entry',
            state: {
              entry,
              operation: 'Update',
              type: 'expense',
              options: [
                'Food',
                'Transport',
                'Accomodation',
                'Entertainment',
                'Other'
              ]
            }
          }}
        >
          Update
        </Link>
      )}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
