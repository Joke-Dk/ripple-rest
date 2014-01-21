var Sequelize = require('sequelize'),
  dbConfig = require('./database.json'),
  pg = require('pg').native;

function createDb (env) {
  if (!env) {
    env = 'dev';
  }

  console.log('connecting to db: ' + dbConfig[env].database + ' as user: ' + dbConfig[env].user);

  var db = new Sequelize(dbConfig[env].database, dbConfig[env].user, dbConfig[env].password, {
    dialect: "postgres",
    host: dbConfig[env].host,
    port: 5432,
    omitNull: true,
    native: true,
    protocol: 'postgres'
  });

  return db;
}


module.exports = createDb;