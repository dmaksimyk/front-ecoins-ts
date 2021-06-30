import {
  useEffect,
  useState
} from "react";

import {
  BALANCE,
  FIRST_LAST_NAME,
  POPOUT,
} from "engine/state";

import {
  useRecoilValue,
  useSetRecoilState
} from "recoil";

import {
  FLoaderAdvice,
  FLoaderAnimation,
  FLoaderHeader,
} from './components'

const FirstLoader = () => {
  const [progress, setProgress] = useState<number>(0);
  const [close, setClose] = useState<string>('')

  const setPopout = useSetRecoilState(POPOUT)
  const firstAndLastName = useRecoilValue(FIRST_LAST_NAME)
  const balance = useRecoilValue(BALANCE)

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setClose('FirstLoader--close'), 2700)
      setTimeout(() => setPopout(undefined), 3000)
    }
  }, [progress, setPopout])

  useEffect(() => {
    if (progress < 100 && balance) setProgress(progress + 50)
    // eslint-disable-next-line
  }, [balance, setProgress])

  useEffect(() => {
    if (progress < 100 && firstAndLastName) setProgress(progress + 50)
    // eslint-disable-next-line
  }, [firstAndLastName, setProgress])

  useEffect(() => {
    return () => setProgress(0)
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
        <FLoaderHeader />
        <FLoaderAnimation progress={progress} />
        <FLoaderAdvice />
      </div>
    </div>
  )
}

(FirstLoader as any).type = "FirstLoader"
export default FirstLoader;