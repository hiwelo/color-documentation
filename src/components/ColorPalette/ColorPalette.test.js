import React from 'react';
import { render } from '@testing-library/react';
import ColorPalette from './ColorPalette';
import { doSnapshotTest } from '../../test-utils.js';
import testPalette from '../../config/testPalette.js';

const defaultProps = {
  palette: testPalette[0],
  name: Object.keys(testPalette)[0],
}

describe('ColorPalette', () => {
  it('should render without crashing', () => {
    render(<ColorPalette {...defaultProps} />);
  });

  it('should match snapshot', () => {
    doSnapshotTest(<ColorPalette {...defaultProps} />);
  });
});
