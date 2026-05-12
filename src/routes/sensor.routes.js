const router = require('express').Router();
const ctrl = require('../controllers/sensor.controller');
const auth = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/sensors:
 *   post:
 *     summary: Create a new sensor
 *     tags: [Sensors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, type, device]
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               unit:
 *                 type: string
 *               device:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sensor created successfully
 */
router.post('/', auth, ctrl.create);

/**
 * @swagger
 * /api/sensors:
 *   get:
 *     summary: Get all sensors (with filters and pagination)
 *     tags: [Sensors]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: device
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of sensors
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /api/sensors/{id}:
 *   get:
 *     summary: Get a sensor by ID
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sensor found
 *       404:
 *         description: Sensor not found
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /api/sensors/{id}:
 *   put:
 *     summary: Update a sensor
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               unit:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sensor updated
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /api/sensors/{id}:
 *   delete:
 *     summary: Delete a sensor
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sensor deleted
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;