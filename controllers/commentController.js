const { Comment } = require("../models");
async function store(req, res) {
  const content = req.body.comentarios;
  const idArticle = req.params.id;
  const author = req.user.dataValues.firstname;
  await Comment.create({
    comment: content,
    username: author,
    articleId: idArticle,
  });
  res.redirect(`/articulos/${idArticle}`);
}

module.exports = { store };
