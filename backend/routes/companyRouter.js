const { Router } = require('express')
const { getAllCompany, findCompanyByInput, findOneCompanyById } = require('../controllers/companyController')

const companyRouter = Router()

companyRouter
  .route('/')
  .get(getAllCompany);
companyRouter
  .route('/')
  .post(findCompanyByInput);
companyRouter
  .route('/:id')
  .get(findOneCompanyById);

module.exports = companyRouter
