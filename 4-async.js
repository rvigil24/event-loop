const https = require('https');

// inicio del benchmark
const inicio = Date.now();


function enviarRequest() {
    https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`${Date.now() - inicio} milisegundos`);
      });
    })
    .end();
}

enviarRequest();
enviarRequest();
enviarRequest();
enviarRequest();
enviarRequest();
enviarRequest();