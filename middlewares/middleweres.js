function ensureAutentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.session.redirectTo = req.originalUrl;
    res.redirect("/login");
  }
}
function makeUserAvailableInViews(req, res, next) {
  res.locals.user = req.user;
  return next();
}
// function RoleAdminRequired(req, res, next) {
//   if (req.user.dataValues.role === "Admin") {
//     console.log("accedio a travez de admin");
//     return next();
//   } else {
//     console.log("RoleAdminRequired denegado");
//     res.redirect("/"); // Pendiente agregar alguna alerta informando al usuario que no tiene los permisos
//   }
// }

// function RoleWriterRequired(req, res, next) {
//   if (req.user.dataValues.role === "Writer") {
//     console.log("accedio a travez de writer");
//     return next();
//   } else {
//     console.log("RoleWriterRequired denegado");
//     RoleEditorRequired(req, res, next);
//   }
// }

// function RoleEditorRequired(req, res, next) {
//   if (req.user.dataValues.role === "Editor") {
//     console.log("accedio a travez de editor");
//     return next();
//   } else {
//     console.log("RoleEditorRequired denegado");
//     RoleAdminRequired(req, res, next);
//   }
// }
module.exports = {
  ensureAutentication,
  makeUserAvailableInViews,
};
