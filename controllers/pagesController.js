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
const flash = require("express-flash");

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
  const returnTo = req.session.returnTo;
  delete req.session.returnTo;
  res.render("login", { message: errorMessage, returnTo: returnTo });
}

async function showRegister(req, res) {
  res.render("./register", { flash: req.flash() });
}
async function register(req, res) {
  const { firstname, lastname, email, password } = req.body;
  try {
    const existingUser = await Author.findOne({ where: { email: email } });
    if (existingUser) {
      req.flash(
        "error",
        "El correo electrónico ya está registrado. Por favor, utiliza otro correo.",
      );
      return res.redirect("/register");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await Author.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
    });

    req.flash("success", "Registro exitoso. Inicia sesión para continuar.");
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    req.flash("error", "Ha ocurrido un error en el registro.");
    res.redirect("/register");
  }
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
