import { ShopItems } from 'components';

import {
  SYMBOLS_RUB,
} from 'engine/state';

type TProps = {
  arr: object[];
  style: object;
}

const Businesses = ({ arr, style }: TProps) => {
  return (
    <div className="Shop__selectedPage container__businesses" style={style}>
      {
        arr.map((item: any) => <ShopItems
          key={`id${item.id}`}
          img={item.img}
          title={item.title}
          requirements={`Стоимость: ${item.costString} ${SYMBOLS_RUB}`}
          status={`Доходность: ${item.earningsString} ${SYMBOLS_RUB}/час`}
        />)
      }
    </div >
  )
}

export default Businesses