import Alea from 'alea'


const defaultSeed = Math.random()
const defaultRng = new Alea(defaultSeed)


// randomly choose an item from an array
//
// @param array choices
// @param bool removeChoice  when true, removes the item from the choices array
// @param function random    (optional) source of random numbers to use, should return between [0..1]
export default function chooseRandom (choices, removeChoice=false, random=defaultRng) {
  if (!choices.length)
    return

  const idx = Math.floor(random() * choices.length)
  const choice = choices[idx]

  if (removeChoice)
    choices.splice(idx, 1)

  return choice
}
