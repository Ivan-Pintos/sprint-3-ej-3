const { Permission, Role } = require("../models");

module.exports = async () => {
  // Roles
  const role_reader = await Role.findByPk(100);
  const role_Writer = await Role.findByPk(200);
  const role_Editor = await Role.findByPk(300);
  const role_Admin = await Role.findByPk(400);

  // Permisos
  const permission_create_article = await Permission.findOne({ where: { name: "create-article" } });
  const permission_create_user = await Permission.findOne({ where: { name: "create-user" } });
  const permission_create_comment = await Permission.findOne({ where: { name: "create-comment" } });
  const permission_delete_user = await Permission.findOne({ where: { name: "delete-user" } });
  const permission_delete_article = await Permission.findOne({ where: { name: "delete-article" } });
  const permission_delete_article_self = await Permission.findOne({
    where: { name: "delete-article-self" },
  });
  const permission_delete_comment = await Permission.findOne({ where: { name: "delete-comment" } });
  const permission_delete_self = await Permission.findOne({ where: { name: "delete-self" } });
  const permission_update_user = await Permission.findOne({ where: { name: "update-user" } });
  const permission_update_article = await Permission.findOne({ where: { name: "update-article" } });
  const permission_update_article_self = await Permission.findOne({
    where: { name: "update-article-self" },
  });
  const permission_update_comment = await Permission.findOne({ where: { name: "update-comment" } });
  const permission_list_user = await Permission.findOne({ where: { name: "list-user" } });
  const permission_list_comment = await Permission.findOne({ where: { name: "list-comment" } });

  //Permisos del rol
  role_reader.addPermissions([
    permission_delete_self,
    permission_create_comment,
    permission_list_comment,
  ]);
  role_Writer.addPermissions([
    permission_create_comment,
    permission_create_article,
    permission_delete_article_self,
    permission_delete_self,
    permission_update_article_self,
    permission_list_comment,
  ]);
  role_Editor.addPermissions([
    permission_create_comment,
    permission_create_article,
    permission_delete_article_self,
    permission_delete_self,
    permission_delete_comment,
    permission_update_article,
    permission_update_comment,
    permission_list_comment,
  ]);
  role_Admin.addPermissions([
    permission_create_user,
    permission_create_comment,
    permission_create_article,
    permission_delete_article,
    permission_delete_comment,
    permission_delete_user,
    permission_update_article,
    permission_update_user,
    permission_update_comment,
    permission_list_comment,
    permission_list_user,
  ]);
};
