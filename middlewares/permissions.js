async function hasPermissionCreateArticle(req, res, next) {
  if (req.user.permissions.some((permission) => permission.name === "create-article")) {
    console.log("Usted puede crear articulos");
    return next();
  } else {
    console.log("Usted no puede crear articulos");
    return res.redirect("/");
  }
}
async function hasPermissionUpdateComment(req, res, next) {
  if (req.user.permissions.some((permission) => permission.name === "update-comment")) {
    console.log("Usted puede Actualizar comentarios");
    return next();
  } else {
    console.log("Usted no puede Actualizar comentarios");
    return res.redirect("/comentarios");
  }
}
async function hasPermissionDeleteComment(req, res, next) {
  if (req.user.permissions.some((permission) => permission.name === "delete-comment")) {
    console.log("Usted puede Borrar comentarios");
    return next();
  } else {
    console.log("Usted no puede Borrar comentarios");
    return res.redirect("/comentarios");
  }
}
async function hasPermissionDeleteArticle(req, res, next) {
  if (req.user.permissions.some((permission) => permission.name === "delete-article")) {
    console.log("Usted puede borrar articulos");
    return next();
  } else {
    console.log("Usted no puede borrar articulos");
    return res.redirect("/admin");
  }
}
async function hasPermissionUpdateArticle(req, res, next) {
  if (req.user.permissions.some((permission) => permission.name === "update-article")) {
    console.log("Usted puede editar articulos");
    return next();
  } else {
    console.log("Usted no puede editar articulos");
    return res.redirect("/admin");
  }
}
async function hasPermissionDeleteUser(req, res, next) {
  if (req.user.permissions.some((permission) => permission.name === "delete-user")) {
    console.log("Usted puede borrar usuarios");
    return next();
  } else {
    console.log("Usted no puede borrar usuarios");
    return res.redirect("/admin");
  }
}
module.exports = {
  hasPermissionCreateArticle,
  hasPermissionUpdateComment,
  hasPermissionDeleteComment,
  hasPermissionDeleteArticle,
  hasPermissionUpdateArticle,
  hasPermissionDeleteUser,
};
