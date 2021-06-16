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

class Transfer extends Component<AppProps, AppState> {
  render() {
    return (
      <Panel id={this.props.id} className='Transfer'>
        <PanelHeader left={<PanelHeaderBack onClick={() => console.log('click')} />} separator={false}>
          <PanelHeaderContent 
            status='Transfer'
            before={true}
            aside
          >
            Transfer
          </PanelHeaderContent>
        </PanelHeader>
        <p>Test</p>
      </Panel>
    )
  }
}

export default Transfer