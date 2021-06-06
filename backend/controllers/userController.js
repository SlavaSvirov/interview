const User = require("../database/models/user")
const bcrypt = require('bcrypt')

const saltRound = 10

const userSigninRender = (req, res) => res.render('signin')

const userSignupRender = (req, res) => res.render('signup')

const userSignup = async (req, res) => {
  const { email, password: pass, name, telegram } = req.body
  if (email && pass && name) {
    const password = await bcrypt.hash(pass, saltRound)
    const newUser = await User.create({
      email,
      password,
      name
    })

    req.session.user = {
      id: newUser._id
    }

    return res.sendStatus(200)
  }
  return res.statuStatus(418)
}

const userSignin = async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    const currentUser = await User.findOne({ email })
    if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
      req.session.user = {
        id: currentUser._id,
        name: currentUser.name,
      }
      return res.sendStatus(200)
    }
    return res.sendStatus(412)
  }
  return res.sendStatus(412)
}

const userSignout = async (req, res) => {
  req.session.destroy(function (err) {
    if (err) return res.sendStatus(401)

    res.clearCookie(req.app.get('cookieName'))
    return res.sendStatus(200)
  })
}

const userInfo = async (req, res) => {
  res.json({
    nickname: res.locals.name,
    email: res.locals.email,
    id: res.locals._id
  })
}

const checkUser = (req, res) => (req.session?.user?.id ? res.sendStatus(200) : res.sendStatus(401))

module.exports = {
  userSigninRender,
  userSignup,
  userSignupRender,
  userSignin,
  userSignout,
  userInfo,
  checkUser
}
