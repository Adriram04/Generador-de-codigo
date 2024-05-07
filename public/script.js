document.getElementById('generateButton').addEventListener('click', function() {
    // Realiza una solicitud al servidor local en el puerto 3000
    fetch('http://localhost:3000/generate-code')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al generar el código.');
        }
        return response.text();
      })
      .then(data => {
        // Muestra el código generado en la página
        document.getElementById('code').textContent = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  