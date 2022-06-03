import TopicForm from '../components/Student/topic/TopicForm'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import { shallow } from 'enzyme'
//ui testing load topicform 
describe('Topic Form Pop Up', () => {
    test('renders without crashing', () => {
        let wrapper = shallow(
          <SnackbarProvider>
            <TopicForm />
          </SnackbarProvider>
        )
        expect(wrapper.exists()).toBe(true)
      })
})