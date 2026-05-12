const router = require('express').Router();
const ctrl = require('../controllers/message.controller');
const auth = require('../middlewares/auth.middleware');
const { validate } = require('../middlewares/validate.middleware');
const { messageSchema } = require('../validations/message.validation');

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Create a new message (sensor data)
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [value, sensor, device]
 *             properties:
 *               value:
 *                 type: number
 *               unit:
 *                 type: string
 *               sensor:
 *                 type: string
 *               device:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message created successfully
 */
router.post('/', auth, validate(messageSchema), ctrl.create);

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Get all messages (with filters and pagination)
 *     tags: [Messages]
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
 *       - in: query
 *         name: sensor
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of messages
 */
router.get('/', auth, ctrl.getAll);

/**
 * @swagger
 * /api/messages/{id}:
 *   get:
 *     summary: Get a message by ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Message found
 *       404:
 *         description: Message not found
 */
router.get('/:id', auth, ctrl.getById);

/**
 * @swagger
 * /api/messages/{id}:
 *   put:
 *     summary: Update a message
 *     tags: [Messages]
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
 *               value:
 *                 type: number
 *               unit:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message updated
 */
router.put('/:id', auth, ctrl.update);

/**
 * @swagger
 * /api/messages/{id}:
 *   delete:
 *     summary: Delete a message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Message deleted
 */
router.delete('/:id', auth, ctrl.remove);

module.exports = router;