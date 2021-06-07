const { Router } = require('express')
const { userSignupRender, userSignup, userSigninRender, userSignin, userSignout, userInfo, checkUser } = require('../controllers/userController')
const user = require('../database/models/user')
const { checkAuth } = require('../middleware/checkAuth')
const CompanyModel = require("../database/models/company");


const userRouter = Router()

userRouter
.post('/', async (req, res) => {
  console.log(req.body.text);
  const currentCompanyFromServer = await CompanyModel.find({companyName : {$regex : req.body.text}})
  console.log(currentCompanyFromServer);
  res.json(currentCompanyFromServer);
})

// userRouter
//   .route('/signup')
//   // .get(userSignupRender)
//   .post(userSignup)

// userRouter
//   .route('/signin')
//   .get(userSigninRender)
//   .post(userSignin)

// userRouter
//   .route('/logout')
//   .get(userSignout)

// userRouter
//   .route('/checkAuth')
//   .get(checkUser)

// userRouter
//   .route('/getInfo')
//   .get(checkAuth, userInfo)



module.exports = userRouter
