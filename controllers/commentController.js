const { Comment } = require("../models");

async function store(req, res) {
  const content = req.body.comentarios;
  const author = req.body.nombre;
  const idArticle = req.params.id;

  await Comment.create({
    comment: content,
    username: author,
    articleId: idArticle,
  });
  res.redirect(`/articulos/${idArticle}`);
}

module.exports = { store };
