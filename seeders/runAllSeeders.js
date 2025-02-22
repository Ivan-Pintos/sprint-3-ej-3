/**
 * Este archivo se encarga de importar todos los seeders que se hayan definido
 * en el sistema y ejectuarlos.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node seeders/runAllSeeders.js
 *
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run seeders
 *
 */

require("dotenv").config();

async function runAllSeeders() {
  await require("./permissionSeeder")();
  await require("./roleSeeder")();
  await require("./rolePermissionSeeder")();
  await require("./userSeeder")();
  await require("./articleSeeder")();
  await require("./commentSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
