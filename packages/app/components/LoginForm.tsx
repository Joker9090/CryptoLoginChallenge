
import React from 'react';
import { View, H1, P, Row, TextInput } from 'dripsy'
import { MotiView, useAnimationState } from 'moti';
import { LoginFormStyle } from 'app/styles/LoginFormStyles';
import { validateEmail, validatePassword } from 'app/config/helpers';
import { FadingObject } from './FadingObject';

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
    from: { scale: 1, },
    open: { scale: 0.88, },
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
        <FadingObject>
          <H1 sx={title}>Welcome!</H1>
        </FadingObject>
        <FadingObject delay={400}>
          <P sx={label}>Email</P>
        </FadingObject>
        <FadingObject delay={400}>
          {/* @ts-ignore */}
          <View sx={inputHolder}>
            <TextInput onChangeText={changeEmail} sx={input} />
            {validation.email && form.email != "" && (<P sx={errorText}>{'Please enter a valid email'}</P>)}
          </View>
        </FadingObject>
        <FadingObject delay={600}>
          <P sx={label}>Password</P>
        </FadingObject>
        <FadingObject delay={600}>
          {/* @ts-ignore */}
          <View sx={inputHolder}>
            <TextInput secureTextEntry={true} onChangeText={changePassword} sx={input} />
            {validation.password && form.password != "" && (<P sx={errorText}>{'Please enter password with more than 8 characters'}</P>)}
          </View>
        </FadingObject>
        {(serverMsg) && (
          <P sx={errorText}>{serverMsg}</P>
        )}
        <FadingObject delay={800}>
          <View sx={buttonHolder} >
            <MotiView state={scaleIn} transition={{ type: 'timing', }} >
              <View sx={(isValid) ? button : buttonDisabled} onTouchStart={() => isValid ? clickBtn() : () => { }} onClick={() => isValid ? clickBtn() : () => { }} onTouchEnd={() => setIsActive(false)} >
                <P sx={buttonText}>Login</P>
              </View>
            </MotiView>
          </View>
        </FadingObject>

      </View>
    </Row>

  )
}

