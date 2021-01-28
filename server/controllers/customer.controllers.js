const {Customer} = require('../models/customer.models');

module.exports = {
  createCustomer : (req, res) => {
    const {name, email} = req.body;
    Customer.create({
      name, 
      email
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