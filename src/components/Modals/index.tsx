import React from 'react';
import { ModalRoot } from '@vkontakte/vkui';
import { useNavigation } from 'engine';
import { ACTIVE_MODAL } from 'engine/state';
import { useRecoilValue } from 'recoil';
import { InformationUser } from './components';

import { ModalPage, ModalPageNextTransfer } from './modalPages';

const Modals: React.FC = () => {
  const activeModal = useRecoilValue(ACTIVE_MODAL);
  const history = useNavigation();

  return (
    <ModalRoot
      activeModal={activeModal || null}
      onClose={() => history.backPage()}
    >
      <ModalPage id="seeUserMore" header="Подробная информация">
        <InformationUser />
      </ModalPage>
      <ModalPageNextTransfer id="nextTransfer" header="Перевод" />
    </ModalRoot>
  );
};

export default Modals;
