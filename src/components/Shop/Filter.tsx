import { useRecoilState } from 'recoil';

import {
  SUBNAVIGATION_BAR_SELECT
} from 'engine/state'

import {
  Icon28MarketOutline,
  Icon28WorkOutline,
  Icon28SmartphoneOutline,
  Icon28TicketOutline,
  Icon28TshirtOutline,
  Icon28CarOutline,
  Icon28HomeOutline
} from '@vkontakte/icons';

import {
  CardScroll,
  SubnavigationButton
} from '@vkontakte/vkui'

const Filter = () => {
  const [selected, setSelected] = useRecoilState(SUBNAVIGATION_BAR_SELECT)
  const btnsStyle = {
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 12
  }

  return (
    <CardScroll size="s" >
      <SubnavigationButton
        style={{ marginLeft: 0, marginTop: 12, marginBottom: 12 }}
        selected={selected === 'businesses'}
        onClick={() => setSelected('businesses')}
        before={<Icon28WorkOutline />}
        size="l"
      >Бизнесы</SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected === 'promotions'}
        onClick={() => setSelected('promotions')}
        before={<Icon28TicketOutline />}
        size="l"
      >Акции</SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected === 'home'}
        onClick={() => setSelected('home')}
        before={<Icon28HomeOutline />}
        size="l"
      >Дома и квартиры</SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected === 'cars'}
        onClick={() => setSelected('cars')}
        before={<Icon28CarOutline />}
        size="l"
      >Машины</SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected === 'clothes'}
        onClick={() => setSelected('clothes')}
        before={<Icon28TshirtOutline />}
        size="l"
      >Одежда</SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected === 'smartphones'}
        onClick={() => setSelected('smartphones')}
        before={<Icon28SmartphoneOutline />}
        size="l"
      >Смартфоны</SubnavigationButton>
      <SubnavigationButton
        style={btnsStyle}
        selected={selected === 'market'}
        onClick={() => setSelected('market')}
        before={<Icon28MarketOutline />}
        size="l"
      >Рынок</SubnavigationButton>
    </CardScroll >
  )
}

export default Filter;