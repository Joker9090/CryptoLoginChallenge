import React from 'react';
import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MotiView, useAnimationState } from 'moti';
import { connect } from 'react-redux';
import { getTest, MainReduxActions } from '../../provider/redux/actions';
import { MainReducerState } from 'app/provider/redux/main';

const mapStateToProps = (state) => {
  const { main } = state
  return {
    current: main.current
  }
};

const mapDispatchToProps = {
  getTest
}


const HomeScreen = ({ current, getTest }: MainReducerState & MainReduxActions) => {
  const sx = useSx();
  const [value, setValue] = React.useState<String>("");
  const [isActive, setIsActive] = React.useState(false);
  console.log("state", current);

  React.useEffect(() => {
    setValue(current);
  }, [current]);

  React.useEffect(() => {
    getTest();
  }, []);


  const scaleIn = useAnimationState({
    from: {
      scale: 0.5,
    },
    open: {
      scale: 1,
    },
    big: {
      scale: 1.5,
    },
  })


  React.useEffect(() => {
    scaleIn.transitionTo(isActive ? 'open' : 'from');
  }, [isActive]);

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View sx={{ maxWidth: 600 }}>

        <MotiView
          state={scaleIn}
          transition={{
            type: 'timing',
          }}
        >
          <P sx={{ textAlign: 'center' }} onLongPress={() => setIsActive(!isActive)}>
            Here is a basic
          </P>
        </MotiView>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P sx={{ textAlign: 'center' }}>
          Cross Platform Expo Vector Icon <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);