import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorSwatch from './ColorSwatch';
import testPalette from '../../config/testPalette';

storiesOf('ColorSwatch', module)
  .add('overview', () => (
    <ColorSwatch color={testPalette.generic.black} />
  ))
;
