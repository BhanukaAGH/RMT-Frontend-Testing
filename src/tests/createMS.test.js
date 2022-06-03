import CreateMS from '../components/Admin/subComponents/CreateMS'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load CreatMS Popup component 
describe('Create MS form PopUp', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <CreateMS />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})