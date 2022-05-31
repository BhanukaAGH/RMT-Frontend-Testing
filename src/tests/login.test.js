import React from 'react'
import { SnackbarProvider } from 'notistack'
import Login from '../pages/Login'
import { shallow } from 'enzyme'

describe('Login Page', () => {
  test('renders without crashing', () => {
    let wrapper = shallow(
      <SnackbarProvider>
        <Login />
      </SnackbarProvider>
    )
    expect(wrapper.exists()).toBe(true)
  })
})
