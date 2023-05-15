const { Comment } = require("../models");

async function index(req, res) {
  const comments = await Comment.findAll({ include: "article" });
  return res.render("comments", { comments });
}

async function store(req, res) {
  try {
    const content = req.body.comentarios;
    const idArticle = req.params.id;
    const user = `${req.user.data.dataValues.firstname} ${req.user.data.dataValues.lastname}`;

    await Comment.create({
      comment: content,
      username: user,
      articleId: idArticle,
    });

    return res.redirect(`/articulos/${idArticle}`);
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
}
async function edit(req, res) {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findOne({ where: { id: commentId } });

    return res.render("editComment", { comment });
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
}
async function update(req, res) {
  try {
    const { commentContent } = req.body;
    await Comment.update(
      {
        comment: commentContent,
      },
      { where: { id: req.params.id } },
    );
    return res.redirect("/comentarios");
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
}
async function destroy(req, res) {
  try {
    await Comment.destroy({
      where: { id: req.params.id },
    });
    return res.redirect("/comentarios");
  } catch (e) {
    console.log(e);
    return res.redirect("/");
  }
}

module.exports = { index, store, edit, update, destroy };
