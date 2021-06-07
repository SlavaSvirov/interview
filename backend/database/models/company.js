const { Schema, model } = require('mongoose');

const companySchema = Schema({
  companyName: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  companyIdHH: String,
  companyUrl: String,
  logo: Object,
  description: String,
  area: String,
});

module.exports = model('Company', companySchema);
