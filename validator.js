const { body, param, validationResult } = require('express-validator');

const appointmentValidatorRules = () => {
  return [
    param('appointmentId').isMongoId().withMessage('Invalid appoinment id'),
    body('patient').notEmpty().withMessage('patient is require in this field'),
    body('medicalInsurance')
      .notEmpty()
      .withMessage('medicalInsurance is require in this field'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { appointmentValidatorRules, validate };
