import { View } from 'dripsy'
import React from 'react'
import { createParam } from 'solito'
import { connect } from 'react-redux';
import { CryptoRow } from 'app/components/CryptoRow';
import { getCrypto, MainReduxActions, ServerStatus } from 'app/provider/redux/actions';
import { LoadingMask } from 'app/components/LoadingMask';
import { useRouter } from 'solito/router';
import { MainReducerState } from 'app/provider/redux/main';

const { useParam } = createParam<{ id: string }>()

const mapStateToProps = (state) => {
  const { main } = state
  return {
    cryptoStatus: main.cryptosStatus,
    crypto: main.crypto,
    loginStatus: main.loginStatus
  }
};

const mapDispatchToProps = {
  getCrypto,
}

function CryptoDetailScreen({ getCrypto, crypto, cryptoStatus, loginStatus }: MainReducerState & MainReduxActions) {
  const { push } = useRouter();
  const [id] = useParam('id');

  React.useEffect(() => {
     /* LOGGED CHECK */
    if (loginStatus !== ServerStatus.FETCH) push(`/`);
    else getCrypto(id);
  }, [id])

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {cryptoStatus == ServerStatus.FETCHING && (<LoadingMask />)}
      {crypto && (<CryptoRow cryptoData={crypto} onClick={console.log} />)}
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoDetailScreen);
