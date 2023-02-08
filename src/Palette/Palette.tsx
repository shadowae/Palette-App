import Canvas from './Canvas';
import generateCodes from '../generateCodes'

const paletteHeightCount = 40;
const paletteWidthCount = 25;

export default (props: { x: number, y: number }) => {
  const { x, y } = props
  const codes = generateCodes();
  const example: [number] | [] = [];

  const getExamples = (() => {
    for (let i = 0; i < paletteHeightCount; ++i) {
      example.push(codes.slice(i * 25, (i + 1) * 25))
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

