const { Comment } = require("../models");
async function store(req, res) {
  const content = req.body.comentarios;
  const idArticle = req.params.id;
  const user = req.user.dataValues.firstname;
  await Comment.create({
    comment: content,
    username: user,
    articleId: idArticle,
  });
  res.redirect(`/articulos/${idArticle}`);
}

module.exports = { store };
