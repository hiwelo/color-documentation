import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultOptions from "../../config/defaultOptions";
import ColorSwatch from "../ColorSwatch";

const componentClass = `${defaultOptions.styles.classPrefix}palette`;

const StyledPalette = styled.article``;

const StyledHeading = styled.h2`
  text-transform: capitalize;
`;

const ColorPalette = props => {
  const colors = Object.keys(props.palette);

  return (
    <StyledPalette className={componentClass}>
      <StyledHeading
        className={`${componentClass}__heading`}
        as={props.options.content.paletteHeading.markup}
      >
        {`${props.options.content.paletteHeading.prefixContent} ${props.name} ${props.options.content.paletteHeading.suffixContent}`}
      </StyledHeading>
      {colors.map((color, index) => (
        <ColorSwatch
          color={props.palette[color]}
          key={index}
          options={props.options}
        />
      ))}
    </StyledPalette>
  );
};

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
  options: PropTypes.object
};

ColorPalette.defaultProps = {
  palette: {},
  name: undefined,
  options: defaultOptions
};

export default ColorPalette;
