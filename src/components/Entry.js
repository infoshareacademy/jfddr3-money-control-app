import React from 'react';
import { database } from '../config/firebase';
import styled from 'styled-components';

export const Entry = ({ entry }) => {
  const onDelete = e => {
    database.entries.doc(entry.id).delete();
  };

  return (
    <li>
      [{entry.type}] [{entry.category}] [{entry.note}] [{entry.date}] [
      {entry.amount}]<button>Update</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
