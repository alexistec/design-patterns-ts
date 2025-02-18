/**
 * ! Adapter Pattern
 * Allows objects with incompatible interfaces to work together. It is also very
 * useful for integrating third-party libraries into our application without 
 * directly depending on them.
 * 
 * It is useful when we want to reuse a class that does not have the interfacess 
 * We need, or when we want  to create an abstracion layer for a third-party library
 * 
 */

import { DenoLoggerAdapter } from "./adapter-files/logger-adapter.ts"

// import { LocalLogger } from "./adapter-files/local-logger.ts";


const logger = new DenoLoggerAdapter("01-adapter.ts")

logger.writeLog('Normal message')

logger.writeWarning('Warning message')

logger.writeError('Error message')