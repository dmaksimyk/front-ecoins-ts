/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Icon16ChevronOutline,
  Icon201CircleFillGold,
  Icon202CircleFillSilver,
  Icon203CircleFillBronze,
} from '@vkontakte/icons';
import { Avatar, SimpleCell } from '@vkontakte/vkui';
import { SYMBOLS_RUB } from 'engine/state';
import { TRating } from 'engine/types';

import { action } from 'engine';

type TProps = TRating & {
  disabled?: boolean;
  chevron?: boolean;
  position: number
};

const RatingItemUser: React.FC<TProps> = ({
  id,
  img,
  name,
  position,
  balance,
  disabled,
  chevron = true,
}) => {
  const style = {
    position: 'absolute',
    bottom: -1,
    right: -1,
  };

  const hw = 14;

  if (position < 1) return <> </>;
  return (
    <SimpleCell
      disabled={disabled}
      onClick={() => action().openVkUser(id)}
      before={(
        <Avatar
          size={36}
          shadow={false}
          src={img}
          style={{ position: 'relative' }}
        >
          {position === 1 ? (
            <Icon201CircleFillGold
              style={style as any}
              height={hw}
              width={hw}
            />
          ) : position === 2 ? (
            <Icon202CircleFillSilver
              style={style as any}
              height={hw}
              width={hw}
            />
          ) : position === 3 ? (
            <Icon203CircleFillBronze
              style={style as any}
              height={hw}
              width={hw}
            />
          ) : null}
        </Avatar>
      )}
      after={chevron ? <Icon16ChevronOutline /> : undefined}
      description={`Баланс: ${balance} ${chevron ? SYMBOLS_RUB : ''}`}
    >
      {position > 3 ? `#${position}` : null} {name}
    </SimpleCell>
  );
};

export default RatingItemUser;
