const {response} = require('express');
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [
      true, 
      'Name is required'
    ],
    minlength : [
      3, 
      'Name must be at least 3 characters long.'
    ]
  }, 
  email : {
    type : String, 
    required : [
      true, 
      'Email is required'
    ],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ]
  }
})

module.exports.Customer = mongoose.model('Customer', CustomerSchema);