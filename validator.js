const { body, param, validationResult } = require('express-validator');

const appointmentValidatorId = () => {
  return [
    param('appointmentId').isMongoId().withMessage('Invalid appoinment id'),
  ];
};

const createAppointmentValidator = () => {
  return [
    body('patient')
      .exists({ checkFalsy: true })
      .withMessage('Patient is a require field'),
    body('age')
      .exists({ checkFalsy: true })
      .withMessage('Age is a require field'),
    body('planType')
      .exists({ checkFalsy: true })
      .withMessage('planType is a require field'),
    body('familyGroup')
      .exists({ checkFalsy: true })
      .withMessage('familyGroup is a require field'),
    body('Doctor')
      .exists({ checkFalsy: true })
      .withMessage('Doctor is a require field'),
    body('medicalCenter')
      .exists({ checkFalsy: true })
      .withMessage('medicalCenter is a require field'),
    body('medicalInsurance')
      .exists({ checkFalsy: true })
      .withMessage('medicalInsurance is a require field'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  appointmentValidatorId,
  createAppointmentValidator,
  validate,
};
