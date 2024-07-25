"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _06_promises_1 = require("./js-foundation/06-promises");
const logger_plugin_1 = require("./plugins/logger.plugin");
const id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
(0, _06_promises_1.getPokemonById)(id)
    .then(pokemon => console.log({ pokemon }))
    .catch(err => console.error(err))
    .finally(() => console.log('Finalmente'));
const logger = (0, logger_plugin_1.buildLogger)('app.js');
logger.log('Hola mundo');
logger.error('Algo malo!');
console.log('Hola mundo');
