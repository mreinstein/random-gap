import Alea     from 'alea'
import { vec2 } from 'wgpu-matrix'


const defaultSeed = Math.random()
const defaultRng = new Alea(defaultSeed)


export default function pointIn2DCircle (out, center, radius, random=defaultRng) {
  const r = radius * Math.sqrt(random()) // Random radius with uniform distribution
  const theta = random() * 2 * Math.PI // Random angle from 0 to 2*PI

  const x = center[0] + r * Math.cos(theta)
  const y = center[1] + r * Math.sin(theta)

  return vec2.set(x, y, out)
}
