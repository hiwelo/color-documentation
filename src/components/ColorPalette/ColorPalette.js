import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultOptions from '../../config/defaultOptions';

const ColorPalette = props => <></>;

ColorPalette.propTypes = {
  /**
   * Specify a color palette to use with this component.
   * 
   * A color palette is an object composed of each color value with the name as key
   */
  palette: PropTypes.object,

  /**
   * Specify the palette name
   */
  name: PropTypes.string,

  /**
   * Specify this component options
   */
  options: PropTypes.object,
};

ColorPalette.defaultProps = {
  palette: {},
  name: undefined,
  options: defaultOptions,
}