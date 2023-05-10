const { passport } = require("../config/passport");

function login(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
}
module.exports = { login };
