import { Icon48Like } from '@vkontakte/icons';
import { ProgressBar } from '.';

type TProps = {
  progress: number;
}
const FLoaderAnimation = ({ progress }: TProps) => {

  return (
    <div className="FLoaderAnimation-load__container">
      <div
        className="FLoaderAnimation-icon__container"
      >
        <Icon48Like />
      </div>
      <ProgressBar progress={progress} />
    </div>
  )
}

export default FLoaderAnimation