const crypto = require('crypto');

const inicio = Date.now();

// ejemplo 1:
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // imprimimos en milisegundos cuanto tiempo tomo calcular este valor
    console.log(`1: ${Date.now() - inicio} milisegundos`);
});

// ejemplo 2
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    // imprimimos en milisegundos cuanto tiempo tomo calcular este valor
    console.log(`2: ${Date.now() - inicio} milisegundos`);
});