import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Entry } from './Entry';

const StyledTypography = styled(Typography)`
  margin: 10px;
`;

export const EntriesList = ({ entries }) => {
  return (
    <>
      {entries.length === 0 ? (
        <StyledTypography>No current records</StyledTypography>
      ) : (
        entries.map(entry => <Entry key={entry.id} entry={entry} />)
      )}
    </>
  );
};
