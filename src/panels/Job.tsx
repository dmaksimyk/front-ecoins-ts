import { Component } from 'react'

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  PanelHeaderBack
} from '@vkontakte/vkui'

interface AppProps {
  id?: string,
}
interface AppState { }

class Job extends Component<AppProps, AppState> {
  render() {
    return (
      <Panel id={this.props.id} className='Job'>
        <PanelHeader left={<PanelHeaderBack onClick={() => console.log('click')} />} separator={false}>
          <PanelHeaderContent 
            status='Job'
            before={true}
            aside
          >
            Job
          </PanelHeaderContent>
        </PanelHeader>
        <p>Test</p>
      </Panel>
    )
  }
}

export default Job