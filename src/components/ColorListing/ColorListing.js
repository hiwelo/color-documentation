import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultOptions from '../../config/defaultOptions';
import ColorPalette from '../ColorPalette';

const StyledListingContainer = styled.section``;

const StyledMainHeading = styled.h1``;

const ColorListing = props => {
  const palettes = Object.keys(props.colors);

  return (
    <StyledListingContainer>
      <StyledMainHeading as={props.options.headings.mainHeading.markup}>
        {props.options.headings.mainHeading.content}
      </StyledMainHeading>
      {palettes.map((palette, index) => (
        <ColorPalette palette={props.colors[palette]} name={palette} options={props.options} key={index} />
      ))}
    </StyledListingContainer>
  );
};

ColorListing.propTypes = {
  /**
   * Specify a listing of all colours and palettes
   */
  colors: PropTypes.object,

  /**
   * Specify this component options
   */
  options: PropTypes.object,
};

ColorListing.defaultProps = {
  colors: {},
  options: defaultOptions,
}

export default ColorListing;
