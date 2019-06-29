import React from "react";
import { storiesOf } from "@storybook/react";
import ColorListing from "./ColorListing";
import testPalette from "../../config/testPalette";

const optionsWithReact = {
  content: {
    mainHeading: {
      element: <h1>Color documentation with React elements</h1>
    }
  }
};

storiesOf("ColorListing", module)
  .add("overview", () => <ColorListing colors={testPalette} />)
  .add("with React elements as options", () => (
    <ColorListing colors={testPalette} options={optionsWithReact} />
  ));
