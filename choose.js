// randomly choose an item from an array
//
// @param array choices
// @param bool removeChoice  when true, removes the item from the choices array
export default function chooseRandom (choices, removeChoice=false) {
  if (!choices.length)
    return

  const idx = Math.floor(Math.random() * choices.length)
  const choice = choices[idx]

  if (removeChoice)
    choices.splice(idx, 1)

  return choice
}
