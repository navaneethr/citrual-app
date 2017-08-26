//requiring Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Defining customerSchema
const customerSchema = new Schema({
    name: {type:String},
    technician: {type:String},
    orderDate:{type:String},
    apptType: {type:String},
    cellNumber: {type:String},
    email:{type:String},
    orderState: {type:String}
});

//though you are creating a model named 'customer', in mongoDB it saves the collection name in plural form; 'customers'
const Customer = mongoose.model('customer', customerSchema);

//Exporting User to use in Server.js
module.exports = Customer;