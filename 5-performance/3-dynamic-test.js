const OS = require('os');
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

const Express = require('express');
const app = Express();
const http = require('http');
const BCrypt = require('bcrypt');

// Router Setup
app.get('/bcrypt', async (req, res) => {
  const hash = await BCrypt.hash('este es un password seguro', 8);
  res.send(hash);
});

// Server Setup
const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Prueba 2 optimizada, ejecutandose con ${process.env.UV_THREADPOOL_SIZE} nucleos, escuchando en puerto: ${port}`);
});
