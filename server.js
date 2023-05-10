require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Author } = require("./models/");
const express = require("express");
const routes = require("./routes");
const methodOverride = require("method-override");
const APP_PORT = process.env.APP_PORT || 3000;
const flash = require("express-flash");
const app = express();
const bcrypt = require("bcryptjs");

app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SECRET_WORD,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(flash());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

passport.use(
  new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const user = await Author.findOne({ where: { email: email } });
      if (user) {
        const BDUserpassword = user.dataValues.password;
        if (await bcrypt.compare(password, BDUserpassword)) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Credenciales incorrectas" });
        }
      } else {
        return done(null, user);
      }
    } catch (error) {
      return done(error);
    }
  }),
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Author.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
);

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
