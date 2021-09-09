import React from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigation } from 'engine';
import {
  BALANCE,
  ID,
  DONUT,
  EXP,
  MY_JOB,
  MY_BUSINESS,
  MY_RATING,
} from 'engine/state';

import {
  MiniInfoCell,
  Separator,
  Header,
} from '@vkontakte/vkui';

import {
  Icon20UserOutline,
  Icon20MoneyCircleOutline,
  Icon20Stars,
  Icon20FavoriteOutline,
  Icon20DiamondOutline,
  Icon20WorkOutline,
  Icon24EmployeeOutline,
  Icon24ChevronCompactRight,
} from '@vkontakte/icons';

const InformationUserMore: React.FC = () => {
  const id = useRecoilValue(ID);
  const balance = useRecoilValue(BALANCE);
  const donut = useRecoilValue(DONUT);
  const exp = useRecoilValue(EXP);
  const business = useRecoilValue(MY_BUSINESS);
  const job = useRecoilValue(MY_JOB);
  const myRating = useRecoilValue(MY_RATING);

  const navigation = useNavigation();

  return (
    <div style={{ paddingBottom: 12 }}>
      <Separator />
      <Header>Профиль</Header>
      <MiniInfoCell key="id_modal" before={<Icon20UserOutline />}>
        Идентификатор:
        {id}
      </MiniInfoCell>
      <MiniInfoCell key="balance_modal" before={<Icon20MoneyCircleOutline />}>
        Баланс:
        {balance}
      </MiniInfoCell>
      <MiniInfoCell key="exp_modal" before={<Icon20Stars />}>
        Уровень:
        {exp}
      </MiniInfoCell>
      <MiniInfoCell key="donut_modal" before={<Icon20DiamondOutline />}>
        Donut:
        {donut ? 'оформлен' : 'не оформлен'}
      </MiniInfoCell>
      <MiniInfoCell key="rating_modal" before={<Icon20FavoriteOutline />}>
        Рейтинг:
        {myRating > 100 ? '100+' : myRating}
        место
      </MiniInfoCell>
      <Separator style={{ marginTop: 8 }} />
      <Header>Заработок</Header>
      <MiniInfoCell
        key="business"
        onClick={() => navigation.nextPage({
          activeView: 'Earnings',
          activePanel: 'Business',
        })}
        mode="add"
        after={<Icon24ChevronCompactRight />}
        before={<Icon20WorkOutline />}
      >
        Бизнес:
        {business.name ? business.name : 'нет'}
      </MiniInfoCell>
      <MiniInfoCell
        key="earnings"
        onClick={() => navigation.nextPage({
          activeView: 'Earnings',
          activePanel: 'Job',
        })}
        mode="add"
        after={<Icon24ChevronCompactRight />}
        before={(
          <Icon24EmployeeOutline
            width={20}
            height={20}
          />
        )}
      >
        Работа:
        {job.name ? job.name : 'безработный'}
      </MiniInfoCell>
    </div>
  );
};

export default InformationUserMore;
