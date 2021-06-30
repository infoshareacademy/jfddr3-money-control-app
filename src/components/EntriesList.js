import React from 'react';
import styled from 'styled-components';
import { Entry } from './Entry';

export const EntriesList = ({ entries }) => {
  return (
    <ul>
      {entries.map(entry => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </ul>
  );
};
