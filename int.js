import Alea from 'https://cdn.skypack.dev/alea'


const defaultSeed = Math.random()
const defaultRng = new Alea(defaultSeed)


// @param function random  (optional) source of random numbers to use, should return between [0..1]
export default function randomInt (min, max, random=defaultRng) {
  return Math.floor(random() * (max - min + 1) + min)
}
