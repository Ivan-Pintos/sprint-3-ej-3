const { Comment } = require("../models");
async function store(req, res) {
  const content = req.body.comentarios;
  const idArticle = req.params.id;

  if (req.isAuthenticated()) {
    const author = req.user.username;
    await Comment.create({
      comment: content,
      username: author,
      articleId: idArticle,
    });
    res.redirect(`/articulos/${idArticle}`);
  } else {
    req.session.returnTo = `/articulos/${idArticle}`;
    res.redirect("/login");
  }
}

module.exports = { store };
