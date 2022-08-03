import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { ReduxProvider } from "./redux/index";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <ReduxProvider>
        <Dripsy>{children}</Dripsy>
      </ReduxProvider>
    </NavigationProvider>
  )
}
