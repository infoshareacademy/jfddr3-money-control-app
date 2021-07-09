import React from 'react';
import { database } from '../config/firebase';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconButton, ListItem, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import UpdateIcon from '@material-ui/icons/Update';

const AmountText = styled(ListItemText)(props => ({
  color: props.color
}));

export const Entry = ({ entry }) => {
  const onDelete = () => {
    database.entries.doc(entry.id).delete();
  };

  return (
    <ListItem divider>
      <ListItemText>{entry.category}</ListItemText>
      <ListItemText>{entry.note}</ListItemText>
      <ListItemText>{entry.date}</ListItemText>
      <AmountText color={entry.type === 'income' ? '#29C481' : '#D1513B'}>
        {entry.amount} PLN
      </AmountText>
      {entry.type === 'income' ? (
        <IconButton
          component={Link}
          color="primary"
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
          <UpdateIcon />
        </IconButton>
      ) : (
        <IconButton
          component={Link}
          color="primary"
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
          <UpdateIcon />
        </IconButton>
      )}
      <IconButton onClick={onDelete}>
        <HighlightOffIcon color="secondary" />
      </IconButton>
    </ListItem>
  );
};
