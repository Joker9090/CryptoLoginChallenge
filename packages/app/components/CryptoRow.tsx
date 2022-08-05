
import React from 'react';
import { View } from 'moti';
import { CryptoObject } from 'app/models/CryptoObject';
import { FadingObject } from './FadingObject';
import { P, Row } from 'dripsy';
import { CryptoRowStyle } from 'app/styles/CryptoRowStyle';

export const CryptoRow = ({ cryptoData, delay, onClick }: { cryptoData: CryptoObject, onClick: Function, delay?: number }) => {
  const { asset_id, name, price_usd } = cryptoData;
  const { holder, textId, textName, textPrice, circle } = CryptoRowStyle;
  return (
    <FadingObject delay={delay} >
      <View onTouchStart={() => onClick(cryptoData)} onClick={() => onClick(cryptoData)}>
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

export const Price = ({ value, style }: { value: Number, style: any }) => {
  if(!value) return ( <P sx={style}> - </P> );
  const a = value.toString().split('.');
  const b = (a[1]) ? Number(a[1].slice(0, 2)) : null
  return (
    <P sx={style}>
      {`$${a[0] ? a[0].toString()+(b ? "."+b : '') : ''}`}
    </P>
  )
}