const CustomerController = require('../controllers/customer.controllers');


module.exports = function (app) {
  app.post('/api/customer/new', CustomerController.createCustomer);
  app.get('/api/customers/all', CustomerController.getAllCustomers);
  app.get('/api/customer/:id', CustomerController.getCustomer);
  app.put('/api/customer/:id/edit', CustomerController.updateCustomer);
  app.delete('/api/customer/:id', CustomerController.deleteCustomer)
}
