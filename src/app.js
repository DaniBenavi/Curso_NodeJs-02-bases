// import { getPokemonById } from './js-foundation/06-promises.js'

// const id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

// getPokemonById(id)
//   .then(pokemon => console.log({ pokemon }))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Finalmente'))
// import { getAge, getUUID } from './plugins/index.js'

import { buildLogger } from './plugins/index.js'

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Algo malo!')
