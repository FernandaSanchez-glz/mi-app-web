const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi App Web - Docker</title>
    </head>
    <body>
      <h1>Mi aplicacion web esta funcionando</h1>
      <p>Esta aplicacion esta ejecutandose dentro de un contenedor Docker.</p>
      <p>Laboratorio 01 - Docker</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});