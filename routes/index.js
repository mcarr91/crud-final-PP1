var express = require('express');
var router = express.Router();
const ctl = require('../controllers/controllers')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });

});

router.get('/personas', ctl.ListPersonas);
router.post('/personas/crear', ctl.CreatePersona);
router.post('/personas/actualizar', ctl.UpdatePersona);
router.get('/personas/eliminar/:id', ctl.DeletePersona);

// Rutas para oficinas
router.get('/oficinas', ctl.ListOficinas);
router.post('/oficinas/crear', ctl.CreateOficina);
router.post('/oficinas/actualizar', ctl.UpdateOficina);
router.get('/oficinas/eliminar/:id', ctl.DeleteOficina);

// Rutas de búsqueda para personas
router.get('/personas/buscar', ctl.buscarPersona);
router.post('/personas/buscar', ctl.buscarPersonaResultados);

// Rutas de búsqueda para oficinas
router.get('/oficinas/buscar', ctl.buscarOficina);
router.post('/oficinas/buscar', ctl.buscarOficinaResultados);

// Rutas para crear nuevos registros
router.get('/personas/crear', ctl.getCrearPersona);
router.get('/oficinas/crear', ctl.getCrearOficina);

// Rutas para editar registros
router.get('/personas/editar/:id', ctl.getEditarPersona);
router.get('/oficinas/editar/:id', ctl.getEditarOficina);

module.exports = router;
