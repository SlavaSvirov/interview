const mongoose = require("mongoose");
const { Schema, model } = require('mongoose')

const CompanySchema = new Schema({
  company: String,
 salary :Number 
})


const CompanyModel = model('Company', CompanySchema)



module.exports = CompanyModel
