import React from 'react';
import renderer from 'react-test-renderer';
import App from '/App.web';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
