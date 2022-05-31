import CreateSubType from '../components/Admin/subComponents/CreateSubType'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load subtype details
describe('Subtype Pop Up', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <CreateSubType />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })

})