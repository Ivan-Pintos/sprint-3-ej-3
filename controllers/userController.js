const { User, Article } = require("../models");
// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll({ include: { all: true } });
  return res.render("user", { users });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Article.destroy({
      where: { userId: req.params.id },
    });
    await User.update(
      {
        isDeleted: true,
      },
      { where: { id: req.params.id } },
    );
    const userBd = await User.findByPk(req.user.data.dataValues.id);
    if (userBd.dataValues.isDeleted === true) {
      //Hacer que el usuario que se acaba de eliminar de la base de datos cierre su session de su navegador
    }
    return res.redirect("/usuarios");
  } catch (e) {
    console.log(e);
    return res.redirect("/");
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
