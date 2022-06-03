import PanelPresentation from '../components/PanelMember/PanelPresentation'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'

//ui testing load panel member home 
describe('Panel Member Home Component', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <PanelPresentation />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})