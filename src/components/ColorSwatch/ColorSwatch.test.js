import React from "react";
import { render } from "@testing-library/react";
import ColorSwatch from "./ColorSwatch";
import { doSnapshotTest } from "../../test-utils.js";
import testPalette from "../../config/testPalette.js";

const palette = testPalette[Object.keys(testPalette)[0]];

const defaultProps = {
  color: palette[Object.keys(palette)[0]]
};

describe("ColorSwatch", () => {
  it("should render without crashing", () => {
    render(<ColorSwatch {...defaultProps} />);
  });

  it("should match snapshot", () => {
    doSnapshotTest(<ColorSwatch {...defaultProps} />);
  });
});
