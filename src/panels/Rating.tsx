import { Component } from 'react'

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  PanelHeaderBack
} from '@gmelum/vkui'

interface AppProps {
  id?: string,
}
interface AppState { }

class Rating extends Component<AppProps, AppState> {
  render() {
    return (
      <Panel id={this.props.id} className='Rating'>
        <PanelHeader left={<PanelHeaderBack onClick={() => console.log('click')} />} separator={false}>
          <PanelHeaderContent 
            status='Rating'
            before={true}
            aside
          >
            Rating
          </PanelHeaderContent>
        </PanelHeader>
        <p>Test</p>
      </Panel>
    )
  }
}

export default Rating