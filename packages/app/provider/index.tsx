import React from 'react';
import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import ReduxProvider from "./redux/index";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Dripsy>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </Dripsy>
    </NavigationProvider>
  )
}
