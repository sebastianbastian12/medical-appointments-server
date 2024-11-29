const router = require('express').Router();
const {
  appointmentValidatorId,
  createAppointmentValidator,
  validate,
} = require('../validator');
const appointmentControllers = require('../controllers/appointments.controllers');
const { isAuthenticated } = require('../authenticate');

router.get('/', isAuthenticated, appointmentControllers.getAllAppointments);

router.get(
  '/:appointmentId',
  isAuthenticated,
  appointmentValidatorId(),
  validate,
  appointmentControllers.getSingleAppointment
);

router.post(
  '/',
  isAuthenticated,
  createAppointmentValidator(),
  validate,
  appointmentControllers.postAppointment
);

router.put(
  '/:appointmentId',
  isAuthenticated,
  appointmentValidatorId(),
  createAppointmentValidator(),
  validate,
  appointmentControllers.updateAppointment
);

router.delete(
  '/:appointmentId',
  isAuthenticated,
  appointmentValidatorId(),
  validate,
  appointmentControllers.deleteAppointment
);

module.exports = router;
