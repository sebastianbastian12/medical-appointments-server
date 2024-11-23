const { ObjectId } = require('mongodb');
const mongodb = require('../data/database');

const getAllAppointments = async (req, res) => {
  try {
    //#Swagger.tags=['appointments']
    const appointment = await mongodb
      .getDatabase()
      .db()
      .collection('appointments')
      .find()
      .toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving appointments' });
  }
};

const getSingleAppointment = async (req, res) => {
  try {
    //#Swagger.tags=['appointments']
    const appointmentId = ObjectId.createFromHexString(
      req.params.appointmentId
    );
    const appointment = await mongodb
      .getDatabase()
      .db()
      .collection('appointments')
      .findOne({ _id: appointmentId });

    if (appointment) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(appointment);
    } else {
      res.status(404).json({ message: 'Appointment not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving the appointment' });
  }
};

const postAppointment = async (req, res) => {
  try {
    //#Swagger.tags=['appointments']
    const appointmentTemplate = {
      patient: req.body.patient,
      age: req.body.age,
      planType: req.body.planType,
      familyGroup: req.body.familyGroup,
      Doctor: req.body.Doctor,
      medicalCenter: req.body.medicalCenter,
      medicalInsurance: req.body.medicalInsurance,
    };
    const appointment = await mongodb
      .getDatabase()
      .db()
      .collection('appointments')
      .insertOne(appointmentTemplate);
    if (appointment.acknowledged) {
      res.status(201).json({ message: 'Appointment created successfully' });
    } else {
      res.status(500).json({
        message: 'Error creating the appointment',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating the appointment' });
  }
};

const updateAppointment = async (req, res) => {
  try {
    //#Swagger.tags=['appointments']
    const appointmentId = ObjectId.createFromHexString(
      req.params.appointmentId
    );
    const updateTemplate = {
      patient: req.body.patient,
      age: req.body.age,
      planType: req.body.planType,
      familyGroup: req.body.familyGroup,
      Doctor: req.body.Doctor,
      medicalCenter: req.body.medicalCenter,
      medicalInsurance: req.body.medicalInsurance,
    };
    const appointment = await mongodb
      .getDatabase()
      .db()
      .collection('appointments')
      .replaceOne({ _id: appointmentId }, updateTemplate);

    if (appointment.modifiedCount > 0) {
      res.status(200).json({ message: 'Appointment updated successfully' });
    } else {
      res.status(404).json({
        message: 'Appointment not found',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating the appointment' });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    //#Swagger.tags=['appointments']
    const appointmentId = ObjectId.createFromHexString(
      req.params.appointmentId
    );
    const appointment = await mongodb
      .getDatabase()
      .db()
      .collection('appointments')
      .deleteOne({ _id: appointmentId });
    if (appointment.deletedCount > 0) {
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } else {
      res.status(404).json({
        message: 'Appointment not found',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting the appointment' });
  }
};

module.exports = {
  getAllAppointments,
  getSingleAppointment,
  postAppointment,
  updateAppointment,
  deleteAppointment,
};
