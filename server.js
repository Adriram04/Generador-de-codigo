const express = require('express');
const axios = require('axios'); // Importa el módulo axios
const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.static('public'));

// Ruta para generar y enviar el código
app.get('/generate-code', (req, res) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Objeto con el código a enviar
  const requestBody = { id: code };

  // Simplemente estamos imprimiendo en la consola para demostrar el envío del código
  console.log('Enviando código:', code);

  // Realiza una solicitud POST a la API en el puerto 8080 utilizando axios
  axios.post('http://localhost:8080/videoMiner/v1/token', requestBody)
    .then(response => {
      console.log('Respuesta de la API:', response.data);
      res.send('Código generado y enviado con éxito.'+code);
    })
    .catch(error => {
      console.error('Error al enviar código a la API:', error);
      res.status(500).send('Error al enviar código a la API.');
    });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
