import {ReactNode} from 'react';

interface IRoll {
  transition: number;
  translate: string;
  children: ReactNode;
}

const Roll = ({transition = 3, translate = "translateX(0)", children}: IRoll) => {
  return (
    <div className="Roll">
      <div className="Roll-speen">
        <div className="Roll-shadow"></div>
        <div className="Roll-arrow"></div>
        <div 
          className="Roll-speen-left" 
          style={{ 
            transition: `ease-in-out ${transition}s`, 
            transform: translate 
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Roll