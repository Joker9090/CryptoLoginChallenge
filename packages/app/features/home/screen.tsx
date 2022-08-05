import React from 'react';
import { View } from 'dripsy'
import { connect } from 'react-redux';
import { doLogin, MainReduxActions, ServerStatus } from '../../provider/redux/actions';
import { MainReducerState } from 'app/provider/redux/main';
import { FormProps, LoginForm } from 'app/components/LoginForm';
import { LoadingMask } from 'app/components/LoadingMask';
import { useRouter } from 'solito/router';

const mapStateToProps = (state) => {
  const { main } = state
  return {
    loginStatus: main.loginStatus,
    loginServerMsg: main.loginServerMsg
  }
};

const mapDispatchToProps = {
  doLogin
}

const HomeScreen = ({ loginStatus, loginServerMsg, doLogin }: MainReducerState & MainReduxActions) => {
  const { push } = useRouter();

  const submitForm = (formProps: FormProps) => doLogin(formProps);

  React.useEffect(() => {
    if (loginStatus === ServerStatus.FETCH) push(`/dashboard`);
  }, [loginStatus]);
  
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}>
      {loginStatus == ServerStatus.FETCHING && (<LoadingMask />)}
      <LoginForm onSubmit={submitForm} serverMsg={loginServerMsg} />
    </View >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
