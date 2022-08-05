
import React from 'react';
import { View } from 'moti';
import { CryptoObject } from 'app/models/CryptoObject';
import { FadingObject } from './FadingObject';
import { P, Row } from 'dripsy';
import { CryptoRowStyle } from 'app/styles/CryptoRowStyle';
import { Price } from './Price';

export const CryptoRow = ({ cryptoData, delay, onClick }: { cryptoData: CryptoObject, onClick: Function, delay?: number }) => {
  const { asset_id, name, price_usd } = cryptoData;
  const { holder, textId, textName, textPrice, circle } = CryptoRowStyle;
  return (
    <FadingObject delay={delay} style={{ flex: 1 }} >
      <View style={{ flex: 1 }} onTouchEnd={() => onClick(cryptoData)} onClick={() => onClick(cryptoData)}>
        <Row sx={holder}>
          <P sx={circle} />
          <P sx={textId}>{asset_id}</P>
          <P sx={textName}>{name}</P>
          <Price style={textPrice} value={price_usd} />
        </Row>
      </View>
    </FadingObject>
  )
}

