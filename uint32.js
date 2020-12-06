import randomInt from './int.js'


const MAX_UINT32 = Math.pow( 2, 32 ) - 1


// @param function random  (optional) source of random numbers to use, should return between [0..1]
export default function (random) {
    return randomInt(0, MAX_UINT32, random)
}
