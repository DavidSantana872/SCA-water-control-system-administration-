const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

// Crear la instancia de la aplicación Express
const app = express();
const port = 5000; // Puerto en el que se ejecutará el servidor

// Middleware para permitir solicitudes CORS y parsear JSON
app.use(cors());
app.use(express.json());

// Construir la ruta absoluta al archivo de la base de datos en el directorio actual
const dbPath = path.join(__dirname, 'Datos.db');

// Conexión a la base de datos SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al abrir la base de datos', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos SQLite.');
  }
});

// Rutas y operaciones CRUD aquí
// Por ejemplo, para obtener todos los usuarios:
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM usuarios', (err, rows) => {
    if (err) {
      console.error('Error al obtener usuarios desde la base de datos', err.message);
      res.status(500).send({ error: 'Error al obtener usuarios desde la base de datos' });
    } else {
      res.send(rows);
    }
  });
});
// recibir datos 
app.post('/api/users', (req, res) => {
  const data = req.body;
  db.all(`SELECT * FROM usuarios WHERE NOMBRE_USUARIO = "${data.NombreUsuario}"`, (err, rows) => {
    if (err) {
      console.error('Error al obtener usuarios desde la base de datos', err.message);
      res.status(500).send({ error: 'Error al obtener usuarios desde la base de datos' });
    } else {
      // Envía los datos obtenidos de la base de datos al cliente
      rows.forEach((elemento) => {
        res.send(elemento)
      })
    }
  });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend en http://localhost:${port}`);
});
