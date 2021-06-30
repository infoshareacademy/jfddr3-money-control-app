import React from 'react';
import { firestore } from '../config/firebase';
import styled from 'styled-components';

export const Entry = ({ entry }) => {
  return (
    <li>
      [{entry.type}] [{entry.category}] [{entry.note}] [{entry.date}] [
      {entry.amount}]<button>Update</button>
      <button>Delete</button>
    </li>
  );
};
