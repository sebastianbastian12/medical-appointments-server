const router = require('express').Router();
const { param } = require('express-validator');
const { appointmentValidatorRules, validate } = require('../validator');
const appointmentControllers = require('../controllers/appointments.controllers');

router.get('/', appointmentControllers.getAllAppointments);

router.get(
  '/:appointmentId',
  param('appointmentId').isMongoId().withMessage('Invalid appoinment id'),
  appointmentValidatorRules(),
  validate,
  appointmentControllers.getSingleAppointment
);

router.post(
  '/',
  appointmentValidatorRules(),
  validate,
  appointmentControllers.postAppointment
);

router.put(
  '/:appointmentId',
  param('appointmentId').isMongoId().withMessage('Invalid appoinment id'),
  appointmentValidatorRules(),
  validate,
  appointmentControllers.updateAppointment
);

router.delete(
  '/:appointmentId',
  param('appointmentId').isMongoId().withMessage('Invalid appoinment id'),
  appointmentValidatorRules(),
  validate,
  appointmentControllers.deleteAppointment
);

module.exports = router;
