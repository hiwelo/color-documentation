import { render } from '@testing-library/react';

/**
 * This file is compiling all useful methods
 * and consts used by unit tests.
 */

const queryByTestId = (testId) => {
  return document.querySelector(`[data-testid="${testId}"]`);
};

const queryParentByTestId = (testId) => {
  return queryByTestId(testId).parentElement;
};

const getTag = (element) => {
  return element.tagName.toLowerCase();
}

const doSnapshotTest = (DOMNode) => {
  const { container } = render(DOMNode);

  expect(container.firstChild).toMatchSnapshot();
};

export { queryByTestId, queryParentByTestId, getTag, doSnapshotTest };
