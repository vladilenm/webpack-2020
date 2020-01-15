async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)

const unused = 42

class Util {
  static id = Date.now()
}

console.log('Util Id:', Util.id)
console.log(unused)

import('lodash').then(_ => {
  console.log('Lodash', _.random(0, 42, true))
})
