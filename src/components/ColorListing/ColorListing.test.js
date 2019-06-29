import React from "react";
import { render } from "@testing-library/react";
import ColorListing from "./ColorListing";
import { doSnapshotTest } from "../../test-utils.js";
import testPalette from "../../config/testPalette";

describe("ColorListing", () => {
  it("should render without crashing", () => {
    render(<ColorListing colors={testPalette} />);
  });

  it("should match snapshot", () => {
    doSnapshotTest(<ColorListing colors={testPalette} />);
  });
});
