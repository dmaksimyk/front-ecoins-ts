import React, { ReactNode } from 'react';
import { Avatar } from 'components/UI';
import Image from './Image';

const TransferUser: React.FC<{ img: string | ReactNode }> = ({ img }) => {
  if (typeof img !== 'string') {
    return (
      <div className="TransferUser__btn_margin TransferUser__btn_active">
        <Image>{img}</Image>
      </div>
    );
  }
  return (
    <div className="TransferUser__btn_margin TransferUser__btns_border">
      <Avatar size={48} img={img} styling={{ borderRadius: 10000 }} />
    </div>
  );
};
export default TransferUser;
