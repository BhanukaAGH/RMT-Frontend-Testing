import EditUser from '../components/Admin/subComponents/EditUser'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load allocate member component 
describe('Admin Edit User PopUP Form Component', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <EditUser />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})