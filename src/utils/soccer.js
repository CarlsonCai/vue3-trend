import { _imageModules } from './common'
const images = new _imageModules()
const iconFile = filename => {
  const path = 'soccer/'
  return images.getSrc(`${path}${filename}@2x.png`)
}
export const iconsDesc = {
  1: {
    outline_icon: iconFile('goal-outline'),
    desc: 'goal'
  },
  2: {
    outline_icon: iconFile('corner-kick-outline'),
    desc: 'corner'
  },
  3: {
    outline_icon: iconFile('foul-card-yellow-outline'),
    desc: 'yellowcard'
  }
}
