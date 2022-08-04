import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

function DashboardScreen() {
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextLink href="/">👈 Go Home</TextLink>
      <TextLink href="/crypto/12">👈 Go cryptodetail</TextLink>
    </View>
  )
}

export default DashboardScreen;
