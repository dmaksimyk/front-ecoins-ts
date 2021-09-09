import React from 'react';
import { Progress } from '@vkontakte/vkui';

const ProgressBar: React.FC<{
  progress: number;
}> = ({ progress }) => (
  <div className="ProgressBar__container">
    <Progress
      className="ProgressBar__progressBar"
      value={progress}
    />
  </div>
);

export default ProgressBar;
