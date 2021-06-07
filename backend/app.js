const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const sessions = require('express-session')
const MongoStore = require('connect-mongo')
const userRouter = require('./routes/userRouter')
const dbConnect = require('./config/dbCOnnect')
const { dbConnectionURL } = require('./config/dbConfig')
const User = require('./database/models/user')

const app = express()
const PORT = 3001
const secretKey = 'f7f5f20ccbe470b80c02610b8c99c44f8ac4cd74abb7ef28ce8d4d2f89713f8b5f1f235f8bb3b7e9d4686f08339b595cdf53eefa77a2520f95331cd6c649589f'
dbConnect()


app.set('view engine', 'hbs')
app.set('cookieName', 'connect-sid')


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

app.use(sessions({
  name: app.get('cookieName'),
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: dbConnectionURL,
  }),
  cookie: {
    httpOnly: true,
  },
}))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(async (req, res, next) => {
  const userID = req.session?.user?.id
  if (userID) {
    const currentUser = await User.findById(userID)
    if (currentUser) {
      res.locals.password = currentUser.password
      res.locals.name = currentUser.name
      res.locals.email = currentUser.email
      res.locals.id = currentUser._id
    }
  }

  next()
})

app.use('/company', userRouter)

app.listen(PORT, () => {
  console.log('NI');
})


