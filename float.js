// generate a random float between 2 values
export default function randomFloat (min, max) {
  return parseFloat( min + ( Math.random() * ( max - min ) ) )
}
