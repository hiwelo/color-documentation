import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorListing from './ColorListing';

const colors = {
  generic: {
    black: '#000',
    white: '#fff',
  },
};

storiesOf('ColorListing', module)
  .add('overview', () => (
    <ColorListing colors={colors} />
  ))
;