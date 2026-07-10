require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const classRoutes = require('./routes/classes');
const appointmentRoutes = require('./routes/appointments');
const attendanceRoutes = require('./routes/attendance');
const progressRoutes = require('./routes/progress');
const maxWeightRoutes = require('./routes/maxweight');
const goalRoutes = require('./routes/goals');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  })
);
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ estado: 'ok', mensaje: 'API de PowerFit funcionando correctamente.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/clases', classRoutes);
app.use('/api/turnos', appointmentRoutes);
app.use('/api/asistencias', attendanceRoutes);
app.use('/api/progreso', progressRoutes);
app.use('/api/peso-maximo', maxWeightRoutes);
app.use('/api/objetivos', goalRoutes);

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada.' });
});

// Manejador de errores general
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Error interno del servidor.' });
});

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor de PowerFit corriendo en http://localhost:${PORT}`);
  });
});
