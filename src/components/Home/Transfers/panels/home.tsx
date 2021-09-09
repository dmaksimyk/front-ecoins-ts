import React from 'react';
import { Spacing } from '@vkontakte/vkui';
import { TransferLog, TransferBalance, TransferInput } from '../components';

const TransferHome: React.FC = () => (
  <div className="TransferHome__panel">
    <TransferBalance />
    <Spacing separator="center" />
    <div><TransferInput /></div>
    <Spacing separator="center" />
    <div><TransferLog /></div>
  </div>
);

export default TransferHome;
