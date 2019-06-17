import React from 'react';
import PropTypes from 'prop-types';
import defaultOptions from '../../config/defaultOptions';

const ColorSwatch = props => <></>;

ColorSwatch.propTypes = {
  /**
   * Specify the color used by this color swatch
   */
  color: PropTypes.string.isRequired,

  /**
   * Specify the options for this component
   */
  options: PropTypes.object,
};

ColorSwatch.defaultProps = {
  options: defaultOptions,
};

export default ColorSwatch;