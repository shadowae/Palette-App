import Canvas from './Canvas';
import generateCodes from '../utils/generateCodes'

const paletteHeightCount = 1024;
const paletteWidthCount = 32;

export default () => {
  const codes = generateCodes();
  const example: [[number]] | [] = [];

  const getExamples = (() => {
    for (let i = 0; i < paletteHeightCount; ++i) {
      example.push(codes.slice(i * paletteWidthCount, (i + 1) * paletteWidthCount))
    }
  })()

  const draw = (context: any) => {
    for (let i = 0; i < paletteHeightCount; ++i) {
      let newX = 0;
      for (let col of example[i]) {
        context.fillStyle = `rgb(${col})`;
        context.fillRect(newX, 25 * i, 25, 25);
        newX += 25;
      }
    }

  };
  return <Canvas draw={draw} height={paletteHeightCount * 25} width={paletteWidthCount * 25} />;
}

