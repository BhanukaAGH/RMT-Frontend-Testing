import AddCriteria from '../components/Admin/subComponents/AddCriteria'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load add criteria to MS component 
describe('Admin Add Criteria to MS Component', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <AddCriteria />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})