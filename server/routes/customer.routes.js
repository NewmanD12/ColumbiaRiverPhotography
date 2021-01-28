const CustomerController = require('../controllers/customer.controllers');


module.exports = function(app){
  app.post('/api/customer/new', CustomerController.createCustomer);
  app.get('/api/customers/all', CustomerController.getAllCustomers);
}
