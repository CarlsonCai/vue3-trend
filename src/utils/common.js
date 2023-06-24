/**
 *
 * @param callback 需要節流的函式
 * @param time 延時的時間
 */
export const _throttle = (callback, time) => {
  let canRun = true
  return function () {
    if (!canRun) {
      return
    }
    canRun = false
    setTimeout(() => {
      callback()
      canRun = true
    }, time)
  }
}
/**
 * 需要大量使用 img src 嵌入圖片資源時引入
 */
export const _imageModules = class {
  constructor() {
    this.init()
  }
  init() {
    this.modules = import.meta.globEager('/src/assets/images/**/*.png')
    this.modules = Object.keys(this.modules).reduce((acc, moduleName) => {
      acc[moduleName.replace('/src/assets/images/', '')] = this.modules[moduleName].default
      return acc
    }, {})
  }
  getSrc(name) {
    return this.modules[name]
  }
}

export const deepClone = object => {
  function _clone(from, to) {
    for (const key in from) {
      if (typeof from[key] === 'object' && from[key] !== null) {
        to[key] = Array.isArray(from[key]) ? [] : {}
        _clone(from[key], to[key])
      } else {
        to[key] = from[key]
      }
    }
    return to
  }

  const clone = Array.isArray(object) ? [] : {}
  return _clone(object, clone)
}
