/**
 * Polyfills
 *
 * If you need to support older browsers that don't have certain
 * JavaScript functionality yet, you may need to polyfill the
 * feature. To do this, just import the specific function from
 * the core-js library (or an external polyfill, if you're sure
 * you need it. Resist the temptation to include the whole of core-js,
 * as it can add a lot of weight to your bundle.
 * core-js: https://github.com/zloirock/core-js
 */

import 'core-js/es/array/for-each'
import 'core-js/es/object/assign'
import 'core-js/es/promise'
import 'regenerator-runtime/runtime' // async/await support
