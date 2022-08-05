
import React from 'react';
import { MotiView } from 'moti';
import { StyleProp, ViewStyle } from 'react-native';

export const FadingObject = ({ children, delay, style }: { children: any, delay?: number, style?: StyleProp<ViewStyle> }) => {
  return (
    <MotiView
      style={style}
      delay={delay}
      from={{ opacity: 0, scale: 1, }}
      animate={{ opacity: 1, scale: 1, }}
      transition={{ type: 'timing', }}
    >
      {children}
    </MotiView>
  )
}



