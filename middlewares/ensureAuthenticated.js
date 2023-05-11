function ensureAutentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.session.redirectTo = req.url;
    res.redirect("/login");
  }
}

module.exports = ensureAutentication;
