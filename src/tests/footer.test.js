import React from 'react'
import Footer from '../components/Home/Footer'
import { shallow } from 'enzyme'

describe('Footer Page', () => {
  test('renders without crashing', () => {
    let wrapper = shallow(<Footer />)
    expect(wrapper.find('p').text()).toBe(
      'We are a leading non-state higher education institute approved by the University Grants Commission (UGC) under the Universities Act. We are members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU). We are also the first Sri Lankan institute to be accredited by the Institute of Engineering & Technology( IET), UK and Engineering Council, UK.'
    )
  })
})
