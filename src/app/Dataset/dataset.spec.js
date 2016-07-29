/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {Dataset} from 'dataset.js';

describe('hello component', () => {
  it('should render hello world', () => {
    const hello = TestUtils.renderIntoDocument(<Dataset/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Dataset page.');
  });
});
