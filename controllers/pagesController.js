/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */
const bcrypt = require("bcryptjs");
const { Article, Author } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({
    include: { all: true },
    order: [["updatedAt", "ASC"]],
  });
  res.render("home", { articles, userData: false });
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function showArticle(req, res) {
  const articles = await Article.findByPk();
  res.render("article", { articles });
}
async function showLogin(req, res) {
  const errorMessage = req.flash("error");
  const redirectTo = req.session.redirectTo || "/";
  console.log(redirectTo, "hola");
  delete req.session.redirectTo;
  res.render("login", { message: errorMessage, redirectTo: redirectTo });
}

async function showRegister(req, res) {
  res.render("./register");
}
async function register(req, res) {
  const passwordUnHashed = req.body.password;
  const passwordHashed = await bcrypt.hash(passwordUnHashed, 10);
  await Author.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: passwordHashed,
  });
  return res.redirect("/admin");
}
function logout(req, res) {
  req.session.destroy((err) => res.redirect("/"));
}

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showArticle,
  showLogin,
  showRegister,
  register,
  logout,
};
