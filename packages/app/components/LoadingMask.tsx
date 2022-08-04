
import React from 'react';
import {SxProp, View } from 'dripsy'
import { LoadingMaskStyle } from 'app/styles/LoadingMaskStyle';

export const LoadingMask = () => {
  const { holder } = LoadingMaskStyle;
  return (
    <View sx={holder as SxProp} />
  )
}

