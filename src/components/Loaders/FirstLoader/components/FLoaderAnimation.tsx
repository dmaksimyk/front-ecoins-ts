import React from 'react';
import { Icon48Like } from '@vkontakte/icons';
import { ProgressBar } from '.';

const FLoaderAnimation: React.FC<{
  progress: number;
}> = ({ progress }) => (
  <div className="FLoaderAnimation__container">
    <div className="FLoaderAnimation__icon">
      <Icon48Like />
    </div>
    <ProgressBar progress={progress} />
  </div>
);

export default FLoaderAnimation;
