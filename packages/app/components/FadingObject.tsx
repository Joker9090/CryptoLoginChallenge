
import React from 'react';
import { MotiView } from 'moti';

export const FadingObject = ({ children, delay }: { children: any, delay?: number }) => {
  return (
    <MotiView
      delay={delay}
      from={{ opacity: 0, scale: 1, }}
      animate={{ opacity: 1, scale: 1, }}
      transition={{ type: 'timing', }}
    >
      {children}
    </MotiView>
  )
}



