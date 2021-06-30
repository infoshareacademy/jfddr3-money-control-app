import React from 'react';
import { firestore } from '../config/firebase';

export const Entry = ({ entry }) => {
  return (
    <li>
      [{entry.category}] [{entry.note}] [{entry.date}] [{entry.amount}]
      <button>Update</button>
      <button>Delete</button>
    </li>
  );
};
