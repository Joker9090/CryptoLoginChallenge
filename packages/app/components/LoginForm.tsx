
import React from 'react';
import { Text, useSx, View, H1, P, Row, A, TextInput } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MotiView, useAnimationState } from 'moti';
import { LoginFormStyle } from 'app/styles/LoginFormStyles';
import { validateEmail, validatePassword } from 'app/helpers/herlpers';

export type LoginFormProps = {
  onSubmit: Function,
  serverMsg: string | null
}

export type ValidationFormProps = {
  email: boolean,
  password: boolean
}
export type FormProps = {
  email: string,
  password: string,
}
export const LoginForm = ({ onSubmit, serverMsg }: LoginFormProps) => {

  const [isActive, setIsActive] = React.useState(false);
  const [validation, setValidation] = React.useState<ValidationFormProps>({ email: true, password: true });
  const [form, setForm] = React.useState<FormProps>({ email: "", password: "" });

  const scaleIn = useAnimationState({
    from: {
      scale: 1,
    },
    open: {
      scale: 0.88,
    },
  })

  React.useEffect(() => {
    scaleIn.transitionTo(isActive ? 'open' : 'from');
  }, [isActive]);

  const changeEmail = (value) => {
    setValidation({ ...validation, email: !validateEmail(value) });
    setForm({ ...form, email: value });
  }

  const changePassword = (value) => {
    setValidation({ ...validation, password: !validatePassword(value, 8) });
    setForm({ ...form, password: value, })
  }

  const isValid = !(Object.entries(validation).map(i => i[1]).filter(i => (i === true)).length);
  const clickBtn = () => {
    setIsActive(true);
    onSubmit(form);
  }
  const { holder, title, label, inputHolder, input, buttonHolder, buttonText, button, errorText, buttonDisabled } = LoginFormStyle;
  return (
    <Row sx={{ alignSelf: 'stretch' }}>
       {/* @ts-ignore */}
      <View sx={holder}>
        <H1 sx={title}>Welcome!</H1>
        <P sx={label}>Email</P>
        {/* @ts-ignore */}
        <View sx={inputHolder}>
          <TextInput onChangeText={changeEmail} sx={input} />
          {validation.email && form.email != "" && (<P sx={errorText}>{'Please enter a valid email'}</P>)}
        </View>

        <P sx={label}>Password</P>
        {/* @ts-ignore */}
        <View sx={inputHolder}>
          <TextInput secureTextEntry={true} onChangeText={changePassword} sx={input} />
          {validation.password && form.password != "" && (<P sx={errorText}>{'Please enter password with more than 8 characters'}</P>)}
        </View>
        {(serverMsg) && (
          <P sx={errorText}>{serverMsg}</P>
        )}
        <View sx={buttonHolder} >
          <MotiView state={scaleIn} transition={{ type: 'timing', }} >
            <View sx={(isValid) ? button : buttonDisabled} onTouchStart={() => isValid ? clickBtn() : () => { }} onTouchEnd={() => setIsActive(false)} >
              <P sx={buttonText}>Login</P>
            </View>
          </MotiView>
        </View>

      </View>
    </Row>

  )
}

