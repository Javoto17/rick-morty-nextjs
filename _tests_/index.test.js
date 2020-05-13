import React from 'react'
import { shallow } from 'enzyme'

// Components
import IndexPage from '../src/pages/index'

describe('Home Page Test', () => {
  it('Should have an image', () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find('h1').text()).toEqual('Next.js + Tailwind CSS3')
  })
})
