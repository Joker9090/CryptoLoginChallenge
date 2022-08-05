
import React from 'react';
import { P } from 'dripsy';

export const Price = ({ value, style }: { value: Number, style: any }) => {
  if (!value) return (<P sx={style}> - </P>);
  const a = value.toString().split('.');
  const b = (a[1]) ? Number(a[1].slice(0, 2)) : null
  return (
    <P sx={style}>
      {`$${a[0] ? a[0].toString() + (b ? "." + b : '') : ''}`}
    </P>
  )
}