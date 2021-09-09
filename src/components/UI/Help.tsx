/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Banner } from '@vkontakte/vkui';

const Help: React.FC<{
  header?: string;
  text: string;
  text2?: string;
  aside?: undefined | 'expand' | 'dismiss';
  style?: any;
}> = ({
  header = 'Подсказка',
  text,
  text2,
  aside = undefined,
  style = undefined,
}) => (
  <Banner
    style={style}
    header={header}
    subheader={(
      <>
        {text}
        <br />
        {text2}
      </>
      )}
    asideMode={aside}
  />
);

export default Help;
