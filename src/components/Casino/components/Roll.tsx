import React, { ReactNode } from 'react';

const Roll: React.FC<{
    transition: number;
    translate: string;
    children: ReactNode;
  }> = ({
    transition = 3,
    translate = 'translateX(0)',
    children,
  }) => (
    <div className="Roll">
      <div className="Roll__speen">
        <div className="Roll_shadow" />
        <div className="Roll__arrow" />
        <div
          className="Roll_speen_left"
          style={{
            transition: `ease-in-out ${transition}s`,
            transform: translate,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );

export default Roll;
