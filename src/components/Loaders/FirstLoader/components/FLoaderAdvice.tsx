/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { hintsForFirstPopout } from 'engine/state';
import React, { useEffect, useState } from 'react';
import { FLoaderTitle } from '.';

const FLoaderAdvice: React.FC = () => {
  const [hint, setHint] = useState<string>('');

  const random = (min: number, max: number) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  useEffect(() => {
    setHint(hintsForFirstPopout[random(0, (hintsForFirstPopout.length - 1))]);
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className="FirstLoaderAdvice__container"
      style={{ opacity: hint ? 0.6 : 0 }}
    >
      <FLoaderTitle className="FirstLoaderAdvice__header" level="3">
        Совет:
      </FLoaderTitle>
      <FLoaderTitle className="FirstLoaderAdvice__text" level="3">
        {hint || ''}
      </FLoaderTitle>
    </div>
  );
};

export default FLoaderAdvice;
