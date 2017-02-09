import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

// Getting there, will update soon...
// TESTING SAYS REFEENCE ERROR: WINDOW IS NOT DEFINED


// can use wrapper.setProps() to set/change the props that are put in, and you can test that

describe('LeafletMap', function() {

  const wrapper = shallow(<LeafletMap />);
  console.log(shallow(<LeafletMap />).debug());
  it('should expect to find a div element', () => {
    expect(wrapper.find('div')).have.length(1);
  })
  it('should render the div with the id "map"', () => {
    expect(wrapper.find('#map')).have.length(1);
  });
});
