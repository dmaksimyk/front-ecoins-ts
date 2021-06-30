import { hintsForFirstPopout } from "engine/state";
import { useEffect, useState } from "react";
import { FLoaderTitle } from ".";

const FLoaderAdvice = () => {
  const [hint, setHint] = useState<string>("")
  
  const random = (min: number, max: number) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  useEffect(() => {
    setHint(hintsForFirstPopout[random(0, (hintsForFirstPopout.length - 1))])
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className="FirstLoader-advice__container"
      style={{ opacity: hint ? 0.6 : 0 }}
    >
      <FLoaderTitle className="FirstLoader-advice__header" level="3">
        Совет:
      </FLoaderTitle>
      <FLoaderTitle className="FirstLoader-advice__text" level="3">
        {hint || ""}
      </FLoaderTitle>
    </div>
  );
};

export default FLoaderAdvice;
