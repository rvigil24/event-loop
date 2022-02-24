/* 1. Inicio de loop.js
    aqui el event loop aun no es invocado, sino se ejecuta
    nuestro codigo por primera vez
*/

const pendingTimers = []; // setTimeOut, setInterval y setImmediate
const pendingOperacionesOS = []; // io tasks
const pendingOtrasOperaciones = []; // threadpool

// los timers, tareas y operaciones se ejecutan aqui, el call stack se ejecutara desde aqui
miArchivo.ejecutarNuestroCodigo();

function deberiaContinuar() {
    /* 
    Comprobar a: Hay pendientes pendingTimers?
    Comprobar b: Hay pendientes pendingOperacionesOS?
    Comprobar c: Hay pendientes pendingOtrasOperaciones? */
    return pendingTimers.length || pendingOperacionesOS.length || pendingOtrasOperaciones.length;
}

// event loop
while(deberiaContinuar()) {
    /*
    a. node busca timers pendientes y si hay funciones listas, invocar callbacks (TIMERS)
    b. node busca operaciones de os o OTRAS y si hay funciones listas, invocar callbacks (I/O Logic)
    c. Se pausa la ejecucion y el event loop se prepara para ir a la siguiente fase (IDLE PHASE)
    d. Poll phase:
        - una nueva operacion de os se complete
        - una nueva operacion se complete
    e. busca timers pendientes. Invoca a cualquier setImmediate (CHECK)
    f. maneja cualquier evento terminado 'close' (como streams, otros eventos de este tipo y process.exit) */
    
} /* 2. cada iteracion es un tick. 
Debemos considerar que en cada una de las etapas las microtasks (promises y nextTick) se ejecutaran en cada fase del event loop */

// 3. regresar a terminal