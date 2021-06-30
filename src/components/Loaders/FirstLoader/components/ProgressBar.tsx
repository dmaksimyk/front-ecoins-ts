import { Progress } from "@vkontakte/vkui"

type TProps = {
  progress: number;
}

const ProgressBar = ({ progress }: TProps) => {

  return (
    <div className="FirstLoader--progressParent">
      <Progress
        className="FirstLoader--progress"
        value={progress}
      />
    </div>
  )
}

export default ProgressBar