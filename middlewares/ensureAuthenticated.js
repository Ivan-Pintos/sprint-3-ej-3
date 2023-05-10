module.export = {
  ensureAutentication: function ensureAutentication(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.session.redirectTo = req.query.redirectTo;
      res.redirect("/login");
    }
  },
};
