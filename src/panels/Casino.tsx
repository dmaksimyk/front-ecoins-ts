import { Component } from 'react'

import { Icon28CoinsOutline } from '@vkontakte/icons';

import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  PanelHeaderBack,
  Div
} from '@gmelum/vkui'

import {
  Random,
  Logs
} from '../components'

interface AppProps {
  id: string,
}
interface AppState { }

class Casino extends Component<AppProps, AppState> {
  render() {
    return (
      <Panel id={this.props.id} >
        {/* <PanelHeader left={<PanelHeaderBack onClick={() => console.log('click')} />} separator={false}>
          <PanelHeaderContent 
            status='Casino'
            before={true}
            aside
          >
            Casino
          </PanelHeaderContent>
        </PanelHeader>
        <Random options={this.props.casino.options} prize={this.props.casino.prize} />
        <Div className="Casino__logs">
          { this.props.casino.logs.map((element: any, index) => <Logs key={index} img={<Icon28CoinsOutline />} type={element.header === "lose" ? "error" : "success" } header={element.header} status={`Коэффициент: ${element.chance}`} />) }
        </Div> */}
      </Panel>
    )
  }
}

export default Casino
