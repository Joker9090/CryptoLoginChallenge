
import React from 'react';
import { View } from 'moti';
import { CryptoObject } from 'app/models/CryptoObject';
import { P, Row } from 'dripsy';
import { CryptoDetailStyle } from 'app/styles/CryptoDetailStyle';
import { ScrollView, Image } from 'react-native';
import { Price } from './Price';
import { Graph } from './Graph';

export const CryptoDetail = ({ cryptoData }: { cryptoData: CryptoObject }) => {
  return (
    <ScrollView>
      <View>
        {Object.entries(cryptoData).map((i) => <MiniValue key={`MiniValue-${i[0]}`} label={i[0]} value={i[1].toString()} />)}
        <Graph data={cryptoData} /> 
      </View>
    </ScrollView>
  )
}

export const MiniValue = ({ label, value }: { value: String, label: String }) => {
  const { holderCenter, textPrice } = CryptoDetailStyle;
  switch (label) {
    case "image": return <MiniImage value={value} />
    // @ts-ignore
    case "price_usd": return <Row sx={holderCenter}><Price value={Number(value)} style={textPrice} /></Row>
    default: return <MiniCommon label={label} value={value} />
  }
}

export const MiniImage = ({ value }: { value: String }) => {
  const { holder } = CryptoDetailStyle;
  return (
    <View>
      <Row sx={holder}>
        <Image
          style={{ width: 20, height: 150, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 'auto' }}
          /* @ts-ignore */
          source={{ uri: value, }}
        />
      </Row >
    </View >
  )
}

export const MiniCommon = ({ label, value }: { value: String, label: String }) => {
  const { holder, text, textValue } = CryptoDetailStyle;
  return (
    <View>
      <Row sx={holder}>
        <P sx={text}>{label}</P >
        <P sx={textValue}>{value}</P>
      </Row >
    </View >
  )
}
