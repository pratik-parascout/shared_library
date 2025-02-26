const User = require('./user');
const Appointment = require('./appointment');
const Availability = require('./availability');
const Review = require('./reviews');
const Payment = require('./payment');
const Service = require('./service');

// Make sure all models are properly loaded before setting up associations
User.hasMany(Appointment);
Appointment.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Availability);
Availability.belongsTo(User);

User.hasMany(Payment);
Payment.belongsTo(User);

Service.hasMany(Appointment);
Appointment.belongsTo(Service);

Appointment.hasOne(Payment);
Payment.belongsTo(Appointment);

Appointment.hasOne(Review);
Review.belongsTo(Appointment);

module.exports = {
  User,
  Appointment,
  Availability,
  Review,
  Payment,
  Service,
};
