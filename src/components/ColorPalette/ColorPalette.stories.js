import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorPalette from './ColorPalette';
import testPalette from '../../config/testPalette';

storiesOf('ColorPalette', module)
  .add('overview', () => (
    <ColorPalette name={'test'} colors={testPalette.generic} />
  ))
;
