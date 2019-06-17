import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import defaultOptions from '../../config/defaultOptions';
import ColorPalette from '../ColorPalette';

const componentClass = `${defaultOptions.styles.classPrefix}listing`;

const StyledListingContainer = styled.section`
  font-family: ${props => props.styles.typography.stack};
`;

const StyledMainHeading = styled.h1``;

const ColorListing = props => {
  const palettes = Object.keys(props.colors);

  return (
    <StyledListingContainer className={`${componentClass}`} styles={props.options.styles}>
      {React.isValidElement(props.options.content.mainHeading.element) ? () => {
        const Option = React.cloneElement(props.options.content.mainHeading.element, {
          children: props.options.content.mainHeading.content,
        });

        return Option;
      } : (
        <StyledMainHeading className={`${componentClass}__heading`} as={props.options.content.mainHeading.markup}>
          {props.options.content.mainHeading.content}
        </StyledMainHeading>
      )}
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
