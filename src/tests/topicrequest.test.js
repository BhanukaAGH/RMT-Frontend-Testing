import SelectedTopic from '../components/Staff/topic components/SelectedTopic'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load topic requests  
describe('Topic Requests', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <SelectedTopic />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})