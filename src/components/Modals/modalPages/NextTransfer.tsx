/* eslint-disable react/require-default-props */
import React from 'react';
import { ModalPage, ModalPageHeader } from '@vkontakte/vkui';
import { Transfer } from 'components/Home/Transfers';

const NextTransfer: React.FC<{
  id: string;
  height?: number;
  header: string;
}> = ({ id, height = 200, header }) => (
  <ModalPage
    settlingHeight={height}
    id={id}
    header={<ModalPageHeader>{header}</ModalPageHeader>}
  >
    <Transfer />
  </ModalPage>
);

export default NextTransfer;
