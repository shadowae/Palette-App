import Canvas from './Canvas';
import generateCodes from '../utils/generateCodes'

const paletteHeightCount = 1024;
const paletteWidthCount = 32;

export default () => {
  const codes = generateCodes();
  const colourCodeArray: [[number]] | [] = [];

  const getColourCodeArray = (() => {
    for (let i = 0; i < paletteHeightCount; ++i) {
      colourCodeArray.push(codes.slice(i * paletteWidthCount, (i + 1) * paletteWidthCount))
    }
  })()

  const draw = (context: any) => {
    for (let i = 0; i < paletteHeightCount; ++i) {
      let newX = 0;
      for (let col of colourCodeArray[i]) {
        context.fillStyle = `rgb(${col})`;
        context.fillRect(newX, 25 * i, 25, 25);
        newX += 25;
      }
    }

  };
  return <Canvas draw={draw} height={paletteHeightCount * 25} width={paletteWidthCount * 25} />;
}

