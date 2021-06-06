const express = require("express");
const router = express.Router();
const CompanyModel = require("../database/models/testCompany");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get("/", async (req, res) => {
//   console.log(req.query);
//   const allCompanyFromServer = await CompanyModel.find();
//   console.log(allCompanyFromServer);
//   res.json(allCompanyFromServer);
// });

module.exports = router;
