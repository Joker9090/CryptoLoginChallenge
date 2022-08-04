import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../../features/home/screen';
import DashboardScreen from '../../features/dashboard/screen';
import { CryptoDetailScreen } from '../../features/crypto/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  "dashboard": undefined
  'crypto-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
        }}
      />
      <Stack.Screen
        name="crypto-detail"
        component={CryptoDetailScreen}
        options={{
          title: 'CryptoDetail',
        }}
      />
    </Stack.Navigator>
  )
}
