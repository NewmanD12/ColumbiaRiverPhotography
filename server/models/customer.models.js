const { response } = require('express');
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [
      true,
      'First name is required'
    ],
    minlength: [
      3,
      'First name must be at least 3 characters long.'
    ]
  },
  lname: {
    type: String,
    required: [
      true,
      'Name is required'
    ],
    minlength: [
      3,
      'Last name must be at least 3 characters long.'
    ]
  },
  email: {
    type: String,
    required: [
      true,
      'Email is required'
    ],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address'
    ]
  },
  lead: {
    type: String,
    required: [
      true,
    ],
  },
  weddingDate: {
    type: Date,
    required: [
      true,
    ],
  },
  venue: {
    type: String,
    required: [
      false,
    ],
  },
  reason: {
    type: String,
    required: [
      false,
    ],
  },
  IG: {
    type: String,
    required: [
      false,
    ],
  },
})

module.exports.Customer = mongoose.model('Customer', CustomerSchema);