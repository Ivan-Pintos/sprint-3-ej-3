const { passport } = require("../config/passport");

function login(req, res, next) {
  passport.authenticate("local", {
    successRedirect: req.body.url,
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
}
module.exports = { login };
