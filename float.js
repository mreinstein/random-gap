import Alea from 'https://cdn.skypack.dev/pin/alea@v1.0.0-P9lu4rchYeqab9T0CblM/mode=imports/optimized/alea.js'


const defaultSeed = Math.random()
const defaultRng = new Alea(defaultSeed)


// generate a random float between 2 values
//
// @param function random  (optional) source of random numbers to use, should return between [0..1]
export default function randomFloat (min, max, random=defaultRng) {
  return parseFloat( min + ( random() * ( max - min ) ) )
}
