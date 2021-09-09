import React, { useState, useEffect } from 'react';
import { ACTIVE_POPOUT, BALANCE, FIRST_LAST_NAME } from 'engine/state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigation } from 'engine';
import { FLoaderAdvice, FLoaderAnimation, FLoaderHeader } from './components';

const FirstLoader: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [close, setClose] = useState<string>('');

  const nav = useNavigation();
  const setPopout = useSetRecoilState(ACTIVE_POPOUT);
  const firstAndLastName = useRecoilValue(FIRST_LAST_NAME);
  const balance = useRecoilValue(BALANCE);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setClose('FirstLoader--close'), 2700);
      setTimeout(() => nav.backPage(true, true), 3000);
    }
    // eslint-disable-next-line
  }, [progress, setPopout]);

  useEffect(() => {
    if (progress < 100 && balance) setProgress(progress + 50);
    // eslint-disable-next-line
  }, [balance, setProgress]);

  useEffect(() => {
    if (progress < 100 && firstAndLastName) setProgress(progress + 50);
    // eslint-disable-next-line
  }, [firstAndLastName, setProgress]);

  useEffect(() => () => setProgress(0), [setProgress]);

  return (
    <div className={`FirstLoader ${close}`}>
      <div className="FirstLoader__background">
        <div
          style={{
            height: 'var(--panelheader_height_android)',
            paddingTop: 'var(--safe-area-inset-top)',
          }}
        />
        <FLoaderHeader />
        <FLoaderAnimation progress={progress} />
        <FLoaderAdvice />
      </div>
    </div>
  );
};

(FirstLoader as any).type = 'FirstLoader';
export default FirstLoader;
