import { CryptoObject } from 'app/models/CryptoObject';
import { CryptoDetailStyle } from 'app/styles/CryptoDetailStyle';
import { View } from 'dripsy';
import React from 'react';

export const Graph = ({ data }: { data: CryptoObject }) => {
  const refWeb = React.useRef<HTMLCanvasElement>(null);
  const [canvasType, setCanvasType] = React.useState('NATIVE'); // enum 'NATIVE', 'WEB', 'NONE'
  React.useEffect(() => {
    setTimeout(() => {
      if (window.document) setCanvasType('WEB');
      else setCanvasType('NATIVE');
    }, 1000)
  }, [])

 
  React.useEffect(() => {
    setTimeout(() => {
      if (refWeb.current) {
        const ctx = refWeb.current.getContext('2d');
        if (ctx) { drawCanvas(ctx) }
      }
    }, 1000)
  }, [refWeb]);
  const { canvas, canvas2 } = CryptoDetailStyle;
  if (canvasType == 'WEB') return <View sx={canvas}><canvas ref={refWeb} style={canvas2} /> </View>
  return <View></View>

}

function drawCanvas(ctx: any) {
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 130, 50, 50);
  drawLine(ctx, 0, 0, 300, 300, "#000");
  drawArc(ctx, 0, 0, 150, 0, Math.PI / 3, "#000");
  drawPieSlice(ctx, 0, 0, 150, Math.PI / 2, Math.PI / 2 + Math.PI / 3, "#F00", "#000");
}

function drawLine(ctx: any, startX: any, startY: any, endX: any, endY: any, color: any) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function drawArc(ctx: any, centerX: any, centerY: any, radius: any, startAngle: any, endAngle: any, color: any) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
  ctx.restore();
}

function drawPieSlice(ctx: any, centerX: any, centerY: any, radius: any, startAngle: any, endAngle: any, fillColor: any, strokeColor: any) {
  ctx.save();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

