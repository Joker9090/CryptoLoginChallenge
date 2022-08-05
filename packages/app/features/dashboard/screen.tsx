import { View } from 'dripsy'
import { CryptoList } from 'app/components/CryptoList';
import { CryptoObject } from 'app/models/CryptoObject';
import { useRouter } from 'solito/router';
import { connect } from 'react-redux';
import { getCryptos, MainReduxActions, ServerStatus } from 'app/provider/redux/actions';
import React from 'react';
import { MainReducerState } from 'app/provider/redux/main';
import { LoadingMask } from 'app/components/LoadingMask';

const mapStateToProps = (state) => {
  const { main } = state
  return {
    cryptosStatus: main.cryptosStatus,
    cryptos: main.cryptos,
    loginStatus: main.loginStatus
  }
};

const mapDispatchToProps = {
  getCryptos
}

function DashboardScreen({ getCryptos, cryptos, cryptosStatus, loginStatus }: MainReducerState & MainReduxActions) {
  const { push } = useRouter();

  const clickOnCrypto = (crypto: CryptoObject) => {
    push(`/crypto/${crypto.asset_id}`);
  }

  React.useEffect(() => {
    /* LOGGED CHECK */
    if (loginStatus !== ServerStatus.FETCH) push(`/`);
    else getCryptos();
  }, [])

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {cryptosStatus == ServerStatus.FETCHING && (<LoadingMask />)}
      {cryptos.length && (<CryptoList onClick={clickOnCrypto} cryptos={cryptos} />)}
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
