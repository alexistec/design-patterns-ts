/**
 * ! Factory Function
 * 
 * It is a design pattern that allows us to dynamically create objects or functions that will be used later in the code
 * 
 * Task exercise apply Factory Function
 * 
 * 
//! Add colors of log by the nivel

//* [INFO:2025-10-21:07] App init success.
//* [WARNING:2025-10-21:07] The memory usage is high.
//* [ERROR:2025-10-21:07] Error connect DB.
 */


import { COLORS } from "../helpers/colors.ts";


function formatDate(date:Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1 ).padEnd(2, '0'); 
    const day = String(date.getDate()).padStart(2,'0');
    const hours = String(date.getHours()).padStart(2,'0');

    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getHours()).padStart(2,'0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

type LogLevel = 'info' | 'warn' | 'error'


function createLogger(level:LogLevel) {
    return (message: string) => {
        const timestamp = formatDate(new Date());
        const logColor = {
          info: COLORS.white,
          warn: COLORS.yellow,
          error: COLORS.red,
        };
    
        const prefix = {
          info: 'INFO',
          warn: 'WARNING',
          error: 'ERROR',
        };
    
        console.log(
          `%c[${prefix[level]}: ${timestamp}] ${message}`,
          logColor[level]
        );
    };
}


function main(){
    const infoLogger = createLogger('info')
    const warnLogger = createLogger('warn');
    const errorLogger = createLogger('error');

    infoLogger('APP INIT SUCCESS.');
    warnLogger('Memory usage is high');
    errorLogger('Error not connect BD.');
}

main();