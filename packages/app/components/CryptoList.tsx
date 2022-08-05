
import React from 'react';
import { ScrollView } from 'moti';
import { CryptoObject } from 'app/models/CryptoObject';
import { CryptoRow } from './CryptoRow';

export const CryptoList = ({ cryptos, onClick }: { cryptos: CryptoObject[], onClick: Function }) => {
  return (
    <ScrollView>
      {cryptos.map((c,index) => (
        <CryptoRow key={`CryptoRow-${c.asset_id}`} cryptoData={c} onClick={onClick} delay={index * 100} />
      ))}
    </ScrollView>
  )
}