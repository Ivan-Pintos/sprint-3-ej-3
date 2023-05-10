const { Article, Comment } = require("../models");
const formidable = require("formidable");
// Display a listing of the resource.
async function index(req, res) {
  const isAdmin = req.user && req.user.isAdmin; // Verifica si el usuario es administrador
  res.render("home", { isAdmin });
}

// Display the specified resource.
async function show(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({ where: { id: articleId }, include: { all: true } });
  const comments = await Comment.findAll({ where: { articleId: articleId } });
  return res.render("article", { article, comments });
}

// Show the form for creating a new resource
async function create(req, res) {
  return res.render("newArticle");
}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log("okey");
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Article.create({
      title: fields.title,
      content: fields.content,
      image: files.image.newFilename,
      authorId: fields.author,
    });

    return res.redirect("/admin");
  });
}

// Show the form for editing the specified resource. Pasarle el id para que cargue
async function edit(req, res) {
  const articleId = req.params.id;
  const article = await Article.findOne({ where: { id: articleId }, include: { all: true } });

  return res.render("editArticle", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    await Article.update(
      {
        title: fields.title,
        content: fields.content,
        image: files.image.newFilename,
      },
      { where: { id: req.params.id } },
    );

    const updatedArticle = await Article.findByPk(req.params.id);

    return res.redirect("/admin");
  });
}
// Remove the specified resource from storage.
async function destroy(req, res) {
  await Comment.destroy({ where: { articleId: req.params.id } });
  await Article.destroy({
    where: { id: req.params.id },
  });
  return res.redirect("/admin");
}

async function showAdmin(req, res, isAdmin) {
  const articles = await Article.findAll({ include: "author" });

  res.render("admin", { articles, isAdmin });
}
module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  showAdmin,
};
