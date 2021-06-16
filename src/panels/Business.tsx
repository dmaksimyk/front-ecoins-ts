import { Component } from 'react'

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  PanelHeaderBack
} from '@vkontakte/vkui'

interface AppProps { 
  id?: string;
}
interface AppState { }

class Business extends Component<AppProps, AppState> {
  render() {
    return (
      <Panel id={this.props.id} className='Business'>
        <PanelHeader left={<PanelHeaderBack onClick={() => console.log('click')} />} separator={false}>
          <PanelHeaderContent 
            status='Business'
            before={true}
            aside
          >
            Business
          </PanelHeaderContent>
        </PanelHeader>
        <p>Test</p>
      </Panel>
    )
  }
}

export default Business