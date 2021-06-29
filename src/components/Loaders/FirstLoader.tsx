import { 
  useEffect, 
  useState 
} from "react";

import { 
  BALANCE, 
  FIRST_LAST_NAME, 
  POPOUT, 
  hintsForFirstPopout 
} from "engine/state";

import { 
  useRecoilValue, 
  useSetRecoilState 
} from "recoil";

import {
  Progress,
  Title,
  Text
} from "@vkontakte/vkui";

const FirstLoader = () => {
  const [progress, setProgress] = useState<number>(0);
  const [hint, setHint] = useState<string | undefined>(undefined)
  const [close, setClose] = useState<string>('')

  const setPopout = useSetRecoilState(POPOUT)
  const firstAndLastName = useRecoilValue(FIRST_LAST_NAME)
  const balance = useRecoilValue(BALANCE)

  const random = (min: number, max: number) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  useEffect(() => {    
    if (progress >= 100) {
      console.log('second data is loaded')
      setTimeout(() => setClose('FirstLoader--close'), 2700)
      setTimeout(() => setPopout({popout: null, type: null}), 3000)
    }

    if (progress === 50) console.log('first data is loaded')
  }, [progress, setPopout])

  useEffect(() => {
    if (balance) {
      if (progress < 100) setProgress(progress + 50)
    }
    // eslint-disable-next-line
  }, [balance, setProgress])

  useEffect(() => {
    if (firstAndLastName) {
      if (progress < 100) setProgress(progress + 50)
    }
    // eslint-disable-next-line
  }, [firstAndLastName, setProgress])

  useEffect(() => {
    setHint(hintsForFirstPopout[random(0, (hintsForFirstPopout.length - 1))])
    return () => {
      setProgress(0)
    }
  }, [setProgress])

  return (
    <div className={`FirstLoader ${close}`}>
      <div className="FirstLoader--bg">
        <div
          style={{
            height: 'var(--panelheader_height_android)',
            paddingTop: 'var(--safe-area-inset-top)'
          }}
        ></div>
        <div className="FirstLoader--header">
          <Title
            weight="regular"
            level="2"
          >Привет!</Title>
          <Title
            weight="regular"
            level="2"
          >Загрузка пользовательских данных!</Title>
        </div>
        <Text
          style={{ opacity: hint ? 1 : 0 }}
          className="FirstLoader--status"
          weight="regular"
        > Совет: <br /> {hint} </Text>
        <div className="FirstLoader--progressParent">
          <Progress
            className="FirstLoader--progress"
            value={progress}
          />
        </div>
      </div>
    </div>
  )
}

export default FirstLoader;