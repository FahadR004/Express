const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');  // Adjust the path as necessary

router.get('/routes', routeController.getAll);
router.post('/add-route', routeController.addRoute);
router.put('/update-route', routeController.updateRoute);

module.exports = router;

