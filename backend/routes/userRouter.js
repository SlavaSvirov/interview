const { Router } = require('express')
const { userSignupRender, userSignup, userSigninRender, userSignin, userSignout, userInfo, checkUser } = require('../controllers/userController')
const { checkAuth } = require('../middleware/checkAuth')

const userRouter = Router()

userRouter
  .route('/signup')
  .get(userSignupRender)
  .post(userSignup)

userRouter
  .route('/signin')
  .get(userSigninRender)
  .post(userSignin)

userRouter
  .route('/logout')
  .get(userSignout)

userRouter
  .route('/checkAuth')
  .get(checkUser)

userRouter
  .route('/getInfo')
  .get(checkAuth, userInfo)

module.exports = userRouter
