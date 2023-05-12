const { User, Article } = require("../models");
// Display a listing of the resource.
async function index(req, res) {}

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
    const userBD = await User.findOne({ where: { id: req.params.id }, include: { all: true } });
    if (req.user.dataValues.role === "Admin" || userBD.dataValues.id === req.params.id) {
      await Article.destroy({
        where: { id: req.params.id },
      });
      await Article.update(
        {
          isDeleted: true,
        },
        { where: { id: req.params.id } },
      );
      // await User.destroy({
      //   where: { id: req.params.id },
      // });
    }
    return res.redirect("/");
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
