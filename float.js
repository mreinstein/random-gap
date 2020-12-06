import Alea from 'https://cdn.skypack.dev/alea'


const defaultSeed = Math.random()
const defaultRng = new Alea(defaultSeed)


// generate a random float between 2 values
//
// @param function random  (optional) source of random numbers to use, should return between [0..1]
export default function randomFloat (min, max, random=defaultRng) {
  return parseFloat( min + ( random() * ( max - min ) ) )
}
