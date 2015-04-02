export default function extend (obj) {
  let args = Array.prototype.slice.call(arguments, 1)

  for (let arg of args) {
    if (!arg) continue
    for (let prop in arg) {
      if (typeof obj[prop] == 'object') obj[prop] = extend(obj[prop], arg[prop])
      else obj[prop] = arg[prop]
    }
  }
  return obj
}
