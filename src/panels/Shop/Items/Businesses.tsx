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
        arr.map((item: any) => item.type === "businesses" ? <ShopItems
          id={item.id}
          type={item.type}
          disable={item.disable}
          key={`id${item.id}`}
          img={item.img}
          title={item.title}
          status={`Доход: ${item.earningsString} ${SYMBOLS_RUB}/час`}
          requirements={`Цена: ${item.costString} ${SYMBOLS_RUB}`}
        /> : null)
      }
    </div >
  )
}

export default Businesses