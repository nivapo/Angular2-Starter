/**
 * Created by srinivasan on 17/09/17.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Category Schema
 */
var UserSchema = new Schema({
  userName: {
    type: String,
    required: 'Category name by cannot be blank'
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  provider: {
    type: String,
    required: 'Category name by cannot be blank'
  },
  email: {
    type: String,
    required: 'Category name by cannot be blank'
  },
  mobile: {
    type: String,
    required: 'Category name by cannot be blank'
  },
  status: {
    type: String,
    required: 'Category name by cannot be blank'
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  modified_on: {
    type: Date,
    default: Date.now
  },
  not_editable: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);
