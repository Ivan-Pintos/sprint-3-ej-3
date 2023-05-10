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
const passportConfig = require("./config/passport");
???? = require("/config/passport");

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
passportConfig();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
    failureFlash: true,
  }),
);

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
