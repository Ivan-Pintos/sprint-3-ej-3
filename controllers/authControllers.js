const { passport } = require("../config/passport");

module.exports = {
  login: function login(req, res) {
    console.log(req);
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    });
  },
};
