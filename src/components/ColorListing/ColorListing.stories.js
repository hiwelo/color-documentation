import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorListing from './ColorListing';
import testPalette from '../../config/testPalette';

storiesOf('ColorListing', module)
  .add('overview', () => (
    <ColorListing colors={testPalette} />
  ))
;