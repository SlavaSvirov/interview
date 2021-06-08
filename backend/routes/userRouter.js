const { Router } = require('express');
const {
  userSignupRender,
  userSignup,
  userSigninRender,
  userSignin,
  userSignout,
  userInfo,
  checkUser,
  changeAvatarBack,
} = require('../controllers/userController');
const user = require('../database/models/user');
const { checkAuth } = require('../middleware/checkAuth');
const CompanyModel = require('../database/models/company');

const userRouter = Router();

userRouter.route('/signup').get(userSignupRender).post(userSignup);

userRouter.route('/signin').get(userSigninRender).post(userSignin);

userRouter.route('/logout').get(userSignout);

userRouter.route('/checkAuth').get(checkUser);

userRouter.route('/getInfo').get(checkAuth, userInfo);

userRouter.route('/checkAuth').get(checkUser);

userRouter.route('/getInfo').get(userInfo);

userRouter.route('/changeAvatar').patch(changeAvatarBack);

module.exports = userRouter;
