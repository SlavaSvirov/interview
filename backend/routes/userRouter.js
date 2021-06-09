const { Router } = require('express');
const {
  userSignup,
  userSignin,
  userSignout,
  userInfo,
  checkUser,
  changeAvatarBack,
  getUser,
} = require('../controllers/userController');
const user = require('../database/models/user');
const { checkAuth } = require('../middleware/checkAuth');
const CompanyModel = require('../database/models/company');

const userRouter = Router();
userRouter.route('/').get(getUser);

userRouter.route('/signup').post(userSignup);

userRouter.route('/signin').post(userSignin);

userRouter.route('/logout').get(userSignout);

userRouter.route('/checkAuth').get(checkUser);

userRouter.route('/getInfo').get(checkAuth, userInfo);

userRouter.route('/checkAuth').get(checkUser);

// userRouter.route('/getInfo').get(userInfo);

userRouter.route('/changeAvatar').patch(changeAvatarBack);

module.exports = userRouter;
