import Allocate from '../components/Admin/subComponents/Allocate'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load allocate member component 
describe('Admin Allocate Panel Member  Component', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <Allocate />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})