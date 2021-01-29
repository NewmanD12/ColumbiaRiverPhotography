const { Customer } = require('../models/customer.models');

module.exports = {
  createCustomer: (req, res) => {
    const { fname, lname, email, lead, weddingDate, venue, reason, IG, pizza } = req.body;
    Customer.create({
      fname,
      lname,
      email,
      lead,
      weddingDate,
      venue,
      reason,
      IG,
      pizza
    })
      .then(customer => res.json(customer))
      .catch(err => res.status(400).json(err))
  },
  getAllCustomers: (req, res) => {
    Customer.find({})
      .then(customers => res.json(customers))
      .catch(err => res.status(400).json(err))
  },
}

module.exports.getCustomer = (request, response) => {
  Customer.findOne({ _id: request.params.id })
    .then(customer => response.json(customer))
    .catch(err => response.json(err));
}

module.exports.updateCustomer = (request, response) => {
  Customer.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updatedCustomer => response.json(updatedCustomer))
    .catch(err => response.json(err))
}
module.exports.deleteCustomer = (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}