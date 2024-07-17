import { getPokemonById } from './js-foundation/06-promises'
import { buildLogger } from './plugins/logger.plugin'

const id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

getPokemonById(id)
  .then(pokemon => console.log({ pokemon }))
  .catch(err => console.error(err))
  .finally(() => console.log('Finalmente'))

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Algo malo!')

console.log('Hola mundo')
