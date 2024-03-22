const interpolateColors = (dataLength, colorScale, colorRangeInfo) => {
   
    const { colorStart, colorEnd } = colorRangeInfo;
    const colorRange = colorEnd - colorStart;
    const intervalSize = colorRange / dataLength;
    const colorArray = [];

    for (let i = 0; i < dataLength; i++) {
      const colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
      colorArray.push(colorScale(colorPoint));
    }

    return colorArray;
}

const calculatePoint = (i, intervalSize, colorRangeInfo) => {
    const { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
    return (useEndAsStart
      ? (colorEnd - (i * intervalSize))
      : (colorStart + (i * intervalSize)));
}



export default interpolateColors;