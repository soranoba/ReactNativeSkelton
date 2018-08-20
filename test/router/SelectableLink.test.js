import React from 'react';
import renderer from 'react-test-renderer';
import SelectableLink from '/router/SelectableLink';
import { View } from 'react-native';
import { StaticRouter } from 'react-router';

describe('SelectableLink', () => {
  function testNode(currentPath, linkProps, viewProps) {
    return (
      <StaticRouter location={currentPath} context={{}}>
        <SelectableLink {...linkProps}>
          <View {...viewProps} />
        </SelectableLink>
      </StaticRouter>
    );
  }

  it('set true to props.selected, when link path is currentPath', () => {
    const viewProps = { style: { backgroundColor: 'red' } };
    const rendered = renderer
      .create(testNode('/target', { to: '/target', replace: true }, viewProps))
      .toJSON();
    expect(rendered.children[0].props).toMatchObject(Object.assign(viewProps, { selected: true }));
  });

  it('set false to props.selected, when link path is not currentPath', () => {
    const viewProps = { style: { backgroundColor: 'red' } };
    const rendered = renderer
      .create(testNode('/current', { to: '/target', replace: true }, viewProps))
      .toJSON();
    expect(rendered.children[0].props).toMatchObject(Object.assign(viewProps, { selected: false }));
  });

  it('renders currectly', () => {
    const rendered = renderer.create(testNode('/target', { to: '/target' }, {})).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
