import React from 'react'
import { SnackbarProvider } from 'notistack'
import Home from '../pages/Home'
import { shallow } from 'enzyme'

describe('Login Page', () => {
  test('renders without crashing', () => {
    let wrapper = shallow(
      <SnackbarProvider>
        <Home />
      </SnackbarProvider>
    )

    expect(wrapper.exists()).toBe(true)
  })
})
