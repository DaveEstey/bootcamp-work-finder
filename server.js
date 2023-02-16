const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
// const passport = require('passport');
// const flash = require('flash')
//TODO: Uncomment to make use of database, once set up
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// for session env 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//Setup routes to the Server
//Look at /controllers folder


// configure express-session| For passport
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
// }));

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));
// initialize passport
// app.use(passport.session());
// app.use(passport.initialize());

// initialize flash
// app.use(flash());

app.use("/", routes);


//TODO: Uncomment to make use of database, once set up
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
});

// app.listen(PORT, () => {
//   console.log(`Server is listening at http://localhost:${PORT}`);
// });
